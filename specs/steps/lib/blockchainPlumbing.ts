import { cp, rm, writeFile } from 'fs/promises'
import { ChildProcess } from 'node:child_process'
import axios from 'axios'
import { executeProcess, executeProcessAndParseResponse, wrapExec, getCmdLog } from './process'

export const settings = {
    accountName: 'augustin', 
    vaultAccountName: 'bob',
    chainId: 'local-ci', 
    feeCoinDenom: 'utrust',
    fee: 10,
    accountAddress: ''
}
const testSessionState = {
    blockchainProcess: {
        processObject: null as ChildProcess,
        output: '',
        error: ''
    }
}

const delay = (milliseconds: number): Promise<void> => {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    })
}

const launchBlockchain = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        testSessionState.blockchainProcess.processObject = await wrapExec('truststored start --log_level error')
        testSessionState.blockchainProcess.processObject.stdout.on("data", chunk => {
            testSessionState.blockchainProcess.output += chunk
        })
        testSessionState.blockchainProcess.processObject.stderr.on('data', chunk => {
            testSessionState.blockchainProcess.error += chunk
        })
        testSessionState.blockchainProcess.processObject.on('exit', async (code, signal) => {
            const logFilePath = './latestTestRun.log'
            if(code) {
                console.error(`Exited blockchain process with code ${code}, more log info can be found in file ${logFilePath}`)
            }
            await writeFile(logFilePath, `Exited blockchain process with code ${code}.\nOutput: ${testSessionState.blockchainProcess.output}\nError: ${testSessionState.blockchainProcess.error}`)
        })
        testSessionState.blockchainProcess.processObject.on('spawn', async () => {
            for(let i = 0; i < 3; i ++) {
                await delay(2000)
                const res = await axios.get(`http://0.0.0.0:1317/cosmos/base/tendermint/v1beta1/node_info`, { } )
                if(res.status === 200){
                    resolve()
                    return
                }
            }
            reject('Timed out')
        })
    })
}

export async function cleanStart () {
    console.log('Resetting blockchain state ...')
    await rm('/Users/bertrandlarsy/.truststore',{ recursive: true, force: true })
    await cp('/Users/bertrandlarsy/truststore\ init/', '/Users/bertrandlarsy/.truststore', { recursive: true })
    console.log('Launching blockchain ...')
    await launchBlockchain()
    console.log('Configuring chain-id ...')
    executeProcess(`truststored config chain-id ${settings.chainId}`)
}

export async function shutDown() {
    if(!testSessionState.blockchainProcess.processObject.kill()){
        console.error('Could not terminate blockchain process.')
    }
    await writeFile('./lastRunCmd.log', getCmdLog())
    // console.log(`Command log:\n${getCmdLog()}`)
}

export async function getAccountBalance (coinDenom: string, accountAddress: string): Promise<number> {
    const result = Number(await executeProcessAndParseResponse(`truststored query bank balances ${accountAddress} --node http://0.0.0.0:26657 --denom ${coinDenom}`, /amount: "(.*)"/))
    
    if(isNaN(result)) {
        throw new Error(`could not determine amount of ${coinDenom} from account ${accountAddress}`)
    }
    
    return result
}