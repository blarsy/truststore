import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { BalancesInfo, getBalances } from '../../lib/connect'
import Loader from './loader'



const UserBalances = () => {
    const [balancesState, setBalancesState] = useState({loading: false, error: '', balances: {} as BalancesInfo})
    
    useEffect(() => {
        tryGetBalances()
    }, [])

    const tryGetBalances = async () => {
        try {
            setBalancesState({...balancesState, ...{loading: true, error: '' }})
            const balances = await getBalances(window.keplr!)
            console.log(balances)
            setBalancesState({...balancesState, ...{loading: false, error: '', balances }})
        } catch(e){
            setBalancesState({...balancesState, ...{loading: false, error: stringifyCaughtError(e, 'Unexpected error while getting balances') }})
        }
    }

    return <Loader loading={balancesState.loading} error={balancesState.error}>
        <Box sx={{display: 'flex', flexFlow:'column nowrap', alignItems: 'stretch'}}>
            <Typography variant="h4">{balancesState.balances.name}'s balances</Typography>
            { (!balancesState.balances.balances || balancesState.balances.balances.length === 0) && 'No token found.' }
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                {balancesState.balances.balances && balancesState.balances.balances.map(balance => {
                    return [
                        <Typography variant="overline">{balance.coin}</Typography>,
                        <Typography variant="caption">{balance.amount}</Typography>]
                })}
            </Box>
        </Box>
    </Loader>
}

export default UserBalances