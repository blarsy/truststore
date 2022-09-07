import { Given, When, Then, BeforeAll } from '@cucumber/cucumber'
import axios from 'axios'
import { exec } from 'node:child_process'
import assert from 'assert'

//const accountName = 'ciUser'
const accountName = 'bob'
let accountAddress: string
const chainId = 'local-ci'
let lastCreatedAttestationData: {
    rating: number,
    email: string,
    creator: string
}
let initialCoinOnAccount: number
const feeCoinDenom = 'trust'
const fee = 10

const executeProcess = (cmd: string, analyzer: (output: string)=>(void), verbose = false) => {
    let output = '', error = ''
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
const getAccountBalance = async (coinDenom: string, accountAddress: string): Promise<number> => {
    let amountFound: number
    await executeProcess(`truststored query bank balances ${accountAddress} --node http://0.0.0.0:26657`, output => {
        const matches = new RegExp(`- amount: "(\\d+)"\\n  denom: ${feeCoinDenom}`).exec(output)
        if(matches.length > 0){
            amountFound = parseInt(matches[1])
        } else {
            throw  new Error(`could not determine initial amount of ${feeCoinDenom} from account ${accountName}`)
        }
    })
    return amountFound
}

BeforeAll( async() => {
    await executeProcess(`truststored keys show ${accountName}`, output => {
        const matches = new RegExp('  address: (.*)', 'm').exec(output)
        if(matches.length > 0){
            accountAddress = matches[1]
        } else {
            throw  new Error(`address of ${accountName} not found`)
        }
    })
    initialCoinOnAccount = await getAccountBalance(feeCoinDenom, accountAddress)
    return executeProcess(`truststored config chain-id ${chainId}`, () => {})
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
    lastCreatedAttestationData = {
        rating, email, creator: accountName
    }
    return executeProcess(`truststored tx truststore create-attestation ${email} 1 ${rating} --from ${accountName} --yes --node http://0.0.0.0:26657 --fees ${fee}${feeCoinDenom}`, output => {})
})

Then('the attestation is created', async () => {
    const res = await axios.get(`http://0.0.0.0:1317/blarsy/truststore/truststore/attestation_by_creator_identifier/${accountAddress}/1/${lastCreatedAttestationData.email}`)
    assert.equal(res.status, 200, `Success status code 200 expected, got ${res.status}`)
    const savedAttestation = res.data.attestation
    assert(savedAttestation.rating, lastCreatedAttestationData.rating.toString())
    assert(savedAttestation.identifier, lastCreatedAttestationData.email)
    assert(savedAttestation.identifierType, "1")
    assert(savedAttestation.creator, accountAddress)
})

Then('my account is debited by some gas tokens', async () => {
    const newBalance = await getAccountBalance(feeCoinDenom, accountAddress)
    assert.equal(newBalance, initialCoinOnAccount - fee)
})

Given('attestations I created', datatable => {
    return 'pending'
})

Given("my portfolio has {int} gas in it", (gasInPortfolio: number) => {
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
