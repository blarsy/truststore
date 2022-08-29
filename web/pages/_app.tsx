import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Head from 'next/head'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { Stack, Box } from '@mui/material'

// Here we combine:
// - using a react context to pass object to children components
// - the useState hook to create and pass a state and a state setter function
// Then, any component in the app who uses 'useAppContext' will be able to view and modify an app-wide state
// Definitely overkill for the current app, but it was 5 minutes copy-pasting from a previous project
type StateRawData = {
  connectedAddress?: string
}
type AppState = {
  appState: StateRawData
  setAppState: Dispatch<SetStateAction<StateRawData>>
}

// The default value passed to 'createContext' is pretty useless, but it is an easy way of letting
// Typescript infer the type of the state
const AppContext = createContext({} as AppState);

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({ connectedAddress: undefined } as StateRawData)

  // Wrap the root component in an AppContext provider, so that any component may use
  // 'useAppContext' to access and modify an app-wide state
  return <AppContext.Provider value={{ appState: state, setAppState: setState}}>
    <Stack sx={{minHeight: '100vh', alignItems: 'center'}}>
      <Head>
        <title>Web o' trust</title>
        <meta name="description" content="Trust by people, for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box  sx={{display: 'flex', flexFlow: 'column wrap', 
        flexGrow: "1", maxWidth: "sm" }}>
        <Component {...pageProps}/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', padding: '1rem 0 0 0'}}>
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
  </AppContext.Provider>
}

export default MyApp

export function useAppContext() {
  return useContext(AppContext)
}