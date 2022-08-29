import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Box } from '@mui/material'
import { blarsy } from '../lib/truststore'
import { useRouter } from 'next/router'
import { useAppContext } from './_app'
import { getAllAttestations } from '../lib/queryTruststore'
import Loader from './components/loader'

const truststoreUrl = process.env.NEXT_PUBLIC_REST_ENDPOINT

const Home: NextPage = () => {
    const {appState} = useAppContext()
    const router = useRouter()
    const [state, setState] = useState({ loading: true, error: undefined as Error | undefined, attestations: [] as blarsy.truststore.truststore.IAttestation[]})
    
    useEffect(() => {
        if(!appState.connectedAddress) {
            router.push('/')
        } else {
            const tryGetAttestations = async () => {
                try {
                    const attestationsRes = await getAllAttestations()
                    setState({...state, ...{loading: false, error: undefined, attestations: attestationsRes.attestation}})
                } catch(e) {
                    setState({...state, ...{loading: false, error: e as Error}})
                }
            }
            tryGetAttestations()
        }
    }, [appState.connectedAddress])
    

    return <Box>
        <Loader loading={state.loading} error={state.error ? state.error.toString() : ''} >
            <span>{state.attestations.length}</span>
        </Loader>
    </Box>
}

export default Home