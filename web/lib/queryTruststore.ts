import { QueryClient } from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { blarsy } from "./truststore"

let client : QueryClient | null = null
const getClient = async () => {
    if(!client) {
        client = new QueryClient(await Tendermint34Client.connect(`http://0.0.0.0:26657`))
    }
    return client
}

const getQuerySvc = async (servicePath: String) => {
    const client = await getClient()
    const rpcImpl = (method: any, requestData: any, callback: (err: Error | null, data: any)=> void) => {
        client.queryUnverified(`/${servicePath}/${method.name}`, requestData).then(data => callback(null, data), err => callback(err, null))
    }
    return blarsy.truststore.truststore.Query.create(rpcImpl)
}

export const getAllIdentifierTypes = async () => {
    const qrySvc = await getQuerySvc('blarsy.truststore.truststore.Query')
    return qrySvc.identifierTypeAll(blarsy.truststore.truststore.QueryAllIdentifierTypeRequest.create({}))
}

export const getAllAttestations = async () => {
    const qrySvc = await getQuerySvc('blarsy.truststore.truststore.Query')
    return qrySvc.attestationAll(blarsy.truststore.truststore.QueryAllAttestationRequest.create({}))
}