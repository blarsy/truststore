import { GasPrice, QueryClient, SigningStargateClient } from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { Window as KeplrWindow } from "@keplr-wallet/types"
import { Registry, GeneratedType } from '@cosmjs/proto-signing'
import { blarsy } from "./truststore"

declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Window extends KeplrWindow {}
}

const rpcEndpoint = process.env.NEXT_PUBLIC_RPC_ENDPOINT as string
const chainId = process.env.NEXT_PUBLIC_CHAIN_ID as string

let _client : QueryClient | null = null
let _signingClient: SigningStargateClient | null = null
const getClient = async () => {
    if(!_client) {
        _client = new QueryClient(await Tendermint34Client.connect(rpcEndpoint))
    }
    return _client
}

const getSigningClient = async () => {
    if(!_signingClient) {
        if(!window.getOfflineSigner) throw Error('Wallet not connected')
        const signer = window.getOfflineSigner(chainId)
        if(!signer) throw Error('Wallet not connected')
        _signingClient = await SigningStargateClient.connectWithSigner(
            rpcEndpoint, 
            signer, 
            { gasPrice: GasPrice.fromString('20utoken')})
        _signingClient.registry.register('/blarsy.truststore.truststore.MsgCreateAttestation', blarsy.truststore.truststore.MsgCreateAttestation)
    }
    return _signingClient
}

const getQuerySvc = async (servicePath: String) => {
    const client = await getClient()
    const rpcImpl = (method: any, requestData: any, callback: (err: Error | null, data: any)=> void) => {
        client.queryUnverified(`/${servicePath}/${method.name}`, requestData).then(
            data => callback(null, data), 
            err => callback(err, null)
        )
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

export const createAttestation = async (createAttestationMsg: blarsy.truststore.truststore.IMsgCreateAttestation) => {
    const client = await getSigningClient()
    const key = await (window.keplr!).getKey(chainId)

    createAttestationMsg.creator = key.bech32Address

    const msg = {
        typeUrl: '/blarsy.truststore.truststore.MsgCreateAttestation',
        value: createAttestationMsg
    }

    return client.signAndBroadcast(key.bech32Address, [msg], 'auto')
}