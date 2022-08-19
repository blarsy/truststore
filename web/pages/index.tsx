import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Box, Stack, Typography, Alert, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { Window as KeplrWindow } from "@keplr-wallet/types"
import { connect } from '../lib/connect'
import { useAppContext } from './_app'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

const Home: NextPage = () => {
  const appState = useAppContext()
  const [state, setState]= useState({
      walletInstalled: true,
      connecting: false,
      connectError: ""
  })
  useEffect(() => {
      if (!window.getOfflineSigner || !window.keplr) {
          setState({...state, ...{walletInstalled: false}})
      } else {
          setState({...state, ...{walletInstalled: true, connecting: false, connectError: ""}})
      }
  }, [])
  return (
    <Stack sx={{minHeight: '100vh'}}>
      <Head>
        <title>Web o' trust</title>
        <meta name="description" content="Trust by people, for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{display: 'flex', flexFlow: 'column wrap', 
        flexGrow: "1", maxWidth: "sm", 
        justifyContent: "space-around", 
        alignItems: "center", padding: "0 1rem"}}>
        <Typography variant="h3" textAlign="center">
          Welcome to Web o' Trust
        </Typography>
        {!state.walletInstalled && <Alert severity="error">Please first install <a href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap">the Keplr wallet</a></Alert>}
        <Button disabled={!state.walletInstalled || state.connecting} variant="contained" size="large" onClick={async _ => {
            setState({...state, ...{connecting: true }})
            const connectError = await connect(window.keplr!)
            if (!connectError) {
                appState.setAppState({...appState, ...{ connected: true }})
            } else {
                setState({...state, ...{ connecting: false, connectError: `There was an issue when trying to connect: ${connectError}` }})
            }
        }}>Connect</Button>
        {state.connecting && <CircularProgress />}
        {state.connectError && <Alert severity="error">{state.connectError}</Alert>}
      </Box>

      <Box sx={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', padding: '1rem 0 0 0'}}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Box>
    </Stack>
  )
}

export default Home
