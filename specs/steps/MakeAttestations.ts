import assert from "assert"

import { Given, When, Then } from '@cucumber/cucumber'
import { writeFile } from 'node:fs/promises'
import { exec } from 'node:child_process'

//const accountName = 'ciUser'
const accountName = 'alice'

const executeProcess = (cmd: string, analyzer: (output: string)=>(void), verbose = false) => {
    let output = '', error = ''
    console.log(`Verbose is ${verbose}\n`)
    return new Promise(async (resolve, reject) => {
        if(verbose) console.log(`Executing command ${cmd}\n`)
        const process = await exec(cmd)
        process.stdout.on("data", chunk => {
            output += chunk
        })
        process.stderr.on('data', chunk => {
            error += chunk
        })

        process.on('close', async (code, signals) => {
            if(code != 0) {
                if(verbose) console.log(`Exiting process with code ${code}, signals ${signals}, error ${error}\n`)
                reject(error)
            }

            try {
                if(verbose) console.log(`Analyzing output: ${output}\n`)
                await analyzer(output)
                if(verbose) console.log(`Command successful\n`)
                resolve(null)
            }
            catch(e) {
                if(verbose) console.log(`Error caught during analysis: ${e}\n`)
                reject(e)
            }
        })
    })
}

Given('we are the {}', (isoDate: string) => {
    const date = new Date(isoDate)
    return writeFile('../date.txt', isoDate)
})
Given('I have a Cosmos portfolio', () => {
    return executeProcess('truststored keys list', async output => {
        const portfolioExists = new RegExp('- name: ' + accountName).test(output)
        if (!portfolioExists) {
            console.log(`Creating account ${accountName}...\n`)
            try {
                await executeProcess(`truststored keys add ${accountName}`, output => {})
                console.log('Key created\n')
                try {
                    await executeProcess(`truststored add-genesis-account ${accountName} 10000token,100000000stake`, output => {})
                    console.log('Account created\n')
                } catch(e) {
                    throw e
                }
            } catch(e) {
                throw e
            }
        } else {
            console.log(`Account ${accountName} exists already. Skipping\n`)
        }
    })
})

When('I give a rating of {int} to the rated with email {}', (rating: number, email: string) => {
    return executeProcess(`truststored tx truststore create-attestation ${email} 1 ${rating} --from ${accountName} --yes --node http://0.0.0.0:26657`, output => {}, true)
})

Then('my account is debited with {int} gas tokens', (gasTokenDebited: number) => {
    return 'pending'
})

Given('attestations I created', datatable => {
    return 'pending'
})

Given("my portfolio has {int} gas in it", (gasInPortfolio: number) => {
    return 'pending'
})

Then('the attestation is created', () => {
    return 'pending'
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