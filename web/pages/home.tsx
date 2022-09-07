import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Box, Button, Dialog, DialogTitle, DialogContent, TableContainer, TableRow, TableHead, TableCell, Table, TableBody, Paper, Typography } from '@mui/material'
import { blarsy } from '../lib/truststore'
import { useRouter } from 'next/router'
import { useAppContext } from './_app'
import { getAllAttestations } from '../lib/queryTruststore'
import Loader from './components/loader'
import AttestationForm from './components/attestationForm'
import { stringifyCaughtError } from '../lib/utils'

const Home: NextPage = () => {
    const {appState} = useAppContext()
    const router = useRouter()
    const [attestationsState, setSAttestationstate] = useState({ 
        loading: false, 
        error: '', 
        attestations: [] as blarsy.truststore.truststore.IAttestation[],
    })
    const [creatingNew, setCreatingNew] = useState(false)


    const tryGetAttestations = async () => {
        try {
            const attestationsRes = await getAllAttestations()
            setSAttestationstate({...attestationsState, ...{loading: false, error: '', attestations: attestationsRes.attestation}})
        } catch(e) {
            setSAttestationstate({...attestationsState, ...{loading: false, error: stringifyCaughtError(e, 'Unexpected error while querying for attestations')}})
        }
    }

    useEffect(() => {
        if(!appState.connectedAddress) {
            router.push('/')
        }
    }, [appState.connectedAddress])
    useEffect(() => {
        tryGetAttestations()
    }, [])
    

    return <Box sx={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', padding: '1rem', margin: '0 0 1rem'}}>
        <Button onClick={() => setCreatingNew( true ) } variant="contained">New attestation</Button>
        <Loader loading={attestationsState.loading} error={attestationsState.error} >
            <TableContainer component={Paper} sx={{ margin: '1rem 0 0' }}>
                <Table sx={{ minWidth: 'sm' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><Typography variant="body1">Identifier Type</Typography></TableCell>
                        <TableCell><Typography variant="body1">Identifier</Typography></TableCell>
                        <TableCell align="right"><Typography variant="body1">Rating(Over 5)</Typography></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {attestationsState.attestations.map((attestation) => (
                        <TableRow
                            key={attestation.index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {attestation.identifierType}
                            </TableCell>
                            <TableCell align="right">{attestation.identifier}</TableCell>
                            <TableCell align="right">{attestation.rating && attestation.rating.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Loader>
        <Dialog fullWidth open={creatingNew} onClose={reason => {
            setCreatingNew(false)
        }}>
            <DialogTitle>Create attestation</DialogTitle>
            <DialogContent>
                <AttestationForm onDone={success => {
                    setCreatingNew(false)
                    if(success) {
                        tryGetAttestations()
                    }
                }}/>
            </DialogContent>
        </Dialog>
    </Box>
}

export default Home