import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Box, Stack, Typography, Alert, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { Window as KeplrWindow } from "@keplr-wallet/types"
import { connect } from '../lib/connect'
import { useAppContext } from './_app'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

const Landing: NextPage = () => {
  const appState = useAppContext()
  const [state, setState]= useState({
      walletInstalled: true,
      connecting: false,
      connectError: ""
  })
  const router = useRouter()
  useEffect(() => {
      if (!window.getOfflineSigner || !window.keplr) {
          setState({...state, ...{walletInstalled: false}})
      } else {
          setState({...state, ...{walletInstalled: true, connecting: false, connectError: ""}})
      }
  }, [])
  return (
    <Box sx={{ display: 'flex', flexFlow: 'column nowrap', flexGrow: 1,
      justifyContent: "space-around", alignItems: "center", padding: "0 1rem"}}>
      <Typography variant="h3" textAlign="center">
        Welcome to Web o' Trust
      </Typography>
      {!state.walletInstalled && <Alert severity="error">Please first install <a href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap">the Keplr wallet</a></Alert>}
      <Button disabled={!state.walletInstalled || state.connecting} variant="contained" size="large" onClick={async _ => {
          setState({...state, ...{connecting: true }})
          const connectError = await connect(window.keplr!)
          if (!connectError) {
              const keyInfo = await (window.keplr!).getKey(process.env.NEXT_PUBLIC_CHAIN_ID!)
              appState.setAppState({...appState, ...{ connectedAddress: keyInfo.bech32Address }})
              router.push('/home')
          } else {
              setState({...state, ...{ connecting: false, connectError: `There was an issue when trying to connect: ${connectError}` }})
          }
      }}>Connect</Button>
      {state.connecting && <CircularProgress />}
      {state.connectError && <Alert severity="error">{state.connectError}</Alert>}
    </Box>
  )
}

export default Landing
