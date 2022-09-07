import { Stack, TextField, Button, Select, 
    FormControl, InputLabel, MenuItem, Slider, 
    Alert, CircularProgress, Box } from '@mui/material'
import { useForm, Controller, UseFormSetError } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { blarsy } from '../../lib/truststore'
import { getAllIdentifierTypes, createAttestation } from '../../lib/queryTruststore'
import Loader from './loader'
import { stringifyCaughtError } from '../../lib/utils'

type Props = {
    onDone: (success: boolean) => void
}

type FormValues = {
    identifierType: string,
    identifier: string,
    rating: number
}

const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
}
const validateTwitterHandle = (handle: string) => {
    const re = /^@[A-Za-z_]{4,15}$/
    return re.test(handle)
}
const validatePhoneNumber = (number: string) => {
    const re = /^\+[0-9]{8,13}$/
    return re.test(number)
}

const validateIdentifierAndType = (data: FormValues, setError: UseFormSetError<FormValues>) => {
    let valid = true
    switch(data.identifierType) {
        case '1':
            if(!validateEmail(data.identifier)){
                setError('identifier', { message: 'invalid email format', type: 'validate'}, { shouldFocus: true })
                valid = false
            }
            break
        case '2':
            if(!validateTwitterHandle(data.identifier)){
                setError('identifier', { message: 'invalid Twitter handle format', type: 'validate'}, { shouldFocus: true })
                valid = false
            }
            break
        case '3':
            //Todo, validate Facebook id
            break
        case '4':
            if(validatePhoneNumber(data.identifier)){
                setError('identifier', { message: 'invalid phone number format', type: 'validate'}, { shouldFocus: true })
                valid = false
            }
            break
        default:
            setError('identifierType', { message: 'unexpected identifier type', type: 'validate'}, { shouldFocus: true })
            valid = false
    }
   return valid
}

const AttestationForm = (props: Props) => {
    const {handleSubmit, formState: { errors }, setError, control} = useForm<FormValues>()
    const [identifierTypeLoadState, setIdentifierTypeLoadState] = useState({
        loading: true,
        error: '',
        identifierTypes: [] as blarsy.truststore.truststore.IIdentifierType[]
    })
    const [submitState, setSubmitState] = useState({
        submitting: false,
        serverError: ''
    })
    useEffect(() => {
        const load = async () => {
            try {
                const response = await getAllIdentifierTypes()
                setIdentifierTypeLoadState({...identifierTypeLoadState, ...{ loading: false, error: '', identifierTypes: response.identifierType }})
            } catch(e) {
                setIdentifierTypeLoadState({...identifierTypeLoadState, ...{error: stringifyCaughtError(e, 'unexpected error while loaing identifier types'), loading: false}})
            }
        }
        load()
    }, [])
    return <Stack sx={{display: 'flex', flexFlow: 'column nowrap', padding: '0.5rem 0 0 0'}} spacing={1}>
        <Loader loading={identifierTypeLoadState.loading} error={identifierTypeLoadState.error}>
            <FormControl fullWidth>
                <InputLabel id="identifierTypeLabel">Identifier type</InputLabel>
                <Controller
                    name="identifierType"
                    control={control}
                    defaultValue="1"
                    render={ ({ field }) =>
                        <Select
                            {...field}
                            size="small"
                            labelId="identifierTypeLabel"
                            label="Identifier type">
                            {
                                identifierTypeLoadState.identifierTypes.map(identifierType => <MenuItem key={identifierType.index!} value={identifierType.index!}>{identifierType.name}</MenuItem>)
                            }
                        </Select>
                    }
                />
            </FormControl>
        </Loader>
        <FormControl fullWidth>
            <Controller
                name="identifier"
                rules={{ required: 'required' }}
                control={control} 
                defaultValue=""
                render={({ field }) => {
                    //console.log(errors)
                    return <TextField {...field} error={!!errors.identifier} helperText={errors.identifier?.message} size="small" label="Identifier"/>}
                }
                />
        </FormControl>
        <InputLabel id="identifierTypeLabel">Rating</InputLabel>
        <FormControl fullWidth>
            <Controller
                name="rating"
                control={control}
                defaultValue={2.5}
                render={({ field }) => (
                    <Slider
                        {...field}
                        onChange={(_, value) => {
                            field.onChange(value);
                        }}
                        valueLabelDisplay="auto"
                        marks
                        max={5}
                        step={0.5}
                    />
                )}
            />
        </FormControl>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: '0 1rem'}}>
            <Button variant="outlined" onClick={() => props.onDone(false)}>Cancel</Button>
            <Button variant="contained" disabled={submitState.submitting} onClick={handleSubmit(async data => {
                if(validateIdentifierAndType(data, setError)) {
                    // Send to blockchain
                    try {
                        setSubmitState({...submitState, ...{submitting: true, serverError: ''}})
                        const txRes = await createAttestation({creator: 'dummys', identifier: data.identifier, identifierType: data.identifierType, rating: data.rating})
                        console.log(txRes)
                        props.onDone(true)
                    } catch(e) {
                        setSubmitState({...submitState, ...{submitting: false, serverError: stringifyCaughtError(e, 'Unexpected error while contacting the server')}})
                    }
                }
            })}>Ok {submitState.submitting && <CircularProgress/>}</Button>
        </Box>
        {submitState.serverError && <Alert severity="error">{submitState.serverError}</Alert> }
    </Stack>
}

export default AttestationForm