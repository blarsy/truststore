import { ChildProcess, exec } from 'node:child_process'

let cmdLog = [] as string[]
export async function wrapExec (cmd): Promise<ChildProcess> {
    cmdLog.push(cmd)
    return await exec(cmd)
}

export function getCmdLog(): string {
    return cmdLog.join('\n')
}

export async function executeProcessAndParseResponse (cmd: string, regex: RegExp): Promise<string> {
    try {
        const output = await executeProcess(cmd)
        const regexRes = output.match(regex)
        if(regexRes.length < 2) return ''
        return regexRes[1]
    } catch {
        return ''
    }
}

export function executeProcess (cmd: string): Promise<string> {
    let output = '', error = ''
    return new Promise(async (resolve, reject) => {
        const process = await wrapExec(cmd)
        process.stdout.on("data", chunk => {
            output += chunk
        })
        process.stderr.on('data', chunk => {
            error += chunk
        })

        process.on('close', async code => {
            if(code != 0) {
                reject(error)
            }

            resolve(output)
        })
    })
}