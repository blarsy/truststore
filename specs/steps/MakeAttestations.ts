import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber'
import axios from 'axios'
import assert from 'assert'
import { executeProcess, executeProcessAndParseResponse } from './lib/process'
import { cleanStart, shutDown, getAccountBalance, settings } from './lib/blockchainPlumbing'

const scenariosState = {
    lastOutput: '',
    lastCreatedAttestationData: {} as{
        rating: number,
        email: string,
        creator: string
    },
    initialCoinOnAccount: null as number
}

const createAttestation = (identifier: string, identifierType: string, rating: number, creator: string): Promise<string> => {
    return executeProcess(`truststored tx truststore create-attestation ${identifier} ${identifierType} ${rating} --from ${creator} --yes --node http://0.0.0.0:26657 --fees ${settings.fee}${settings.feeCoinDenom}`)
}

BeforeAll(cleanStart)

AfterAll(shutDown)

Given('I have a Cosmos portfolio with {int} gas', async (gas: number) => {
    settings.accountAddress = await executeProcessAndParseResponse(`truststored keys show ${settings.accountName}`, /^  address: (.*)$/m)
    if (!settings.accountAddress || settings.accountAddress == '') {
        settings.accountAddress = await executeProcessAndParseResponse(`truststored keys add ${settings.accountName}`, /^  address: (.*)$/m)
        // transfer the expected amount of gas
        await executeProcess(`truststored tx bank send ${settings.vaultAccountName} ${settings.accountAddress} ${gas}${settings.feeCoinDenom} --yes --node http://0.0.0.0:26657`)
        console.log(`Account ${settings.accountName} created\n`)
    } else {
        const currentBalance = await getAccountBalance(settings.feeCoinDenom, settings.accountAddress)
        // If too much gas, error
        if(currentBalance > gas) throw new Error(`too much gas on account ${settings.accountName}, should be maximum ${gas}`)
        if(currentBalance !== gas) {
            // if too few gas, send some to have exactly the expected amount
            await executeProcess(`truststored tx bank send ${settings.vaultAccountName} ${settings.accountAddress} ${gas - currentBalance}${settings.feeCoinDenom} --yes --node http://0.0.0.0:26657`)
        }
    }
    scenariosState.initialCoinOnAccount = gas
})

Given('the attestation correction period {int} blocks', attestationRewardlessUpdatePeriod => {
    
})

When('I give a rating of {int} to the rated with email {}', async (rating: number, email: string) => {
    scenariosState.lastCreatedAttestationData = {
        rating, email, creator: settings.accountName
    }
    try {
        scenariosState.lastOutput = await createAttestation(email, "1", rating, settings.accountName)
    }
    catch(e) {
        scenariosState.lastOutput = e.toString()
    }
})

const processOutputsignalsSuccess = (output: string) => {
    if(output.match(/^code: 0$/m))
        return true
    else {
        console.error(`Process failed.\nOutput: ${output}`)
        return false
    }
}

Then('the attestation is created', async () => {
    assert(processOutputsignalsSuccess(scenariosState.lastOutput))
    const url = `http://0.0.0.0:1317/blarsy/truststore/truststore/attestation_by_creator_identifier/${settings.accountAddress}/1/${scenariosState.lastCreatedAttestationData.email}`
    try {
        const res = await axios.get(url)
        assert.equal(res.status, 200, `Success status code 200 expected, got ${res.status}`)
        const savedAttestation = res.data.attestation
        assert(savedAttestation.rating, scenariosState.lastCreatedAttestationData.rating.toString())
        assert(savedAttestation.identifier, scenariosState.lastCreatedAttestationData.email)
        assert(savedAttestation.identifierType, "1")
        assert(savedAttestation.creator, settings.accountAddress)
    } catch(e) {
        console.error(`Failure querying '${url}':\n${e}`)
    }
})

Then('the operation fails because of an attempt to duplicate an attestation', () => {
    assert.match(scenariosState.lastOutput, new RegExp('duplicate'))
})

Then('my account is debited by some gas tokens', async () => {
    const newBalance = await getAccountBalance(settings.feeCoinDenom, settings.accountAddress)
    assert.equal(newBalance, scenariosState.initialCoinOnAccount - settings.fee)
})

Given('attestations I created', async datatable => {
    for(const row of datatable.rows()) {
        const output = await createAttestation(row[1], row[0], row[2], settings.accountName)
        if(!processOutputsignalsSuccess(output))
            throw new Error(`Attestation creation failed, command output:  ${output}`)
    }
})

Given('the attestation correction period is {int} days', (correctionPeriodInDays: number) => {
    return 'pending'
})

When('I modify attestation {int}, setting the identifier to {string}, and rating to {int}', (attestationId: number, email: string, rating: number) => {
    return 'pending'
})

Then('the attestation is modified accordingly',  () => {
    return 'pending'
})

When('I modify attestation {int}, setting rating to {int}', (attestationId: number, rating: number) => {
    return 'pending'
})

Given('at {}, I modified attestation {int}, setting the identifier to {}, and rating to {int}', (isoDate: string, attestationId: number, email: string, rating: number) => {
    return 'pending'
})

When('I modify attestation {int}, setting the identifier to {}, and rating to {int}', (attestationId: number, email: string, rating: number) => {
    return 'pending'
})
