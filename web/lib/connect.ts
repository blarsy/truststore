import { Keplr } from "@keplr-wallet/types"

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID as string
const CHAIN = process.env.NEXT_PUBLIC_CHAIN as string
const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT as string
const REST_ENDPOINT = process.env.NEXT_PUBLIC_REST_ENDPOINT as string
const COIN_ABV = process.env.NEXT_PUBLIC_COIN_ABV as string

export async function connect(keplr: Keplr): Promise<string> {
  if (keplr.experimentalSuggestChain) {
      try {
          // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
          // cosmoshub-3 is integrated to Keplr so the code should return without errors.
          // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
          // If the user approves, the chain will be added to the user's Keplr extension.
          // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
          // If the same chain id is already registered, it will resolve and not require the user interactions.
          await keplr.experimentalSuggestChain({
              // Chain-id of the Regen chain.
              chainId: CHAIN_ID,
              // The name of the chain to be displayed to the user.
              chainName: CHAIN,
              // RPC endpoint of the chain.
              rpc: RPC_ENDPOINT,
              // REST endpoint of the chain.
              rest: REST_ENDPOINT,
              // Staking coin information
              stakeCurrency: {
                // Coin denomination to be displayed to the user.
                coinDenom: COIN_ABV.toUpperCase(),
                // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                coinMinimalDenom: `u${COIN_ABV}`,
                // # of decimal points to convert minimal denomination to user-facing denomination.
                coinDecimals: 6,
                // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                // coinGeckoId: ""
              },
              // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
              // The 'stake' button in Keplr extension will link to the webpage.
              // walletUrlForStaking: "",
              // The BIP44 path.
              bip44: {
                // You can only set the coin type of BIP44.
                // 'Purpose' is fixed to 44.
                coinType: 118,
              },
              // Bech32 configuration to show the address to user.
              bech32Config: {
                bech32PrefixAccAddr: COIN_ABV,
                bech32PrefixAccPub: `${COIN_ABV}pub`,
                bech32PrefixValAddr: `${COIN_ABV}valoper`,
                bech32PrefixValPub: `${COIN_ABV}valoperpub`,
                bech32PrefixConsAddr: `${COIN_ABV}valcons`,
                bech32PrefixConsPub: `${COIN_ABV}valconspub`,
              },
              // List of all coin/tokens used in this chain.
              currencies: [
                {
                  // Coin denomination to be displayed to the user.
                  coinDenom: COIN_ABV.toUpperCase(),
                  // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                  coinMinimalDenom: `u${COIN_ABV}`,
                  // # of decimal points to convert minimal denomination to user-facing denomination.
                  coinDecimals: 6,
                  // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                  // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                  // coinGeckoId: ""
                },
              ],
              // List of coin/tokens used as a fee token in this chain.
              feeCurrencies: [
                {
                  // Coin denomination to be displayed to the user.
                  coinDenom: COIN_ABV.toUpperCase(),
                  // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                  coinMinimalDenom: `u${COIN_ABV}`,
                  // # of decimal points to convert minimal denomination to user-facing denomination.
                  coinDecimals: 6,
                  // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                  // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                  // coinGeckoId: ""
                },
              ],
              // (Optional) The number of the coin type.
              // This field is only used to fetch the address from ENS.
              // Ideally, it is recommended to be the same with BIP44 path's coin type.
              // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
              // So, this is separated to support such chains.
              //coinType: 118,

              // (Optional) This is used to set the fee of the transaction.
              // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
              // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
              // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
              gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
              },
              features: ['stargate'],
            })
          
            await keplr.enable(CHAIN_ID)
            //Returning empty string means success (as we return an error message)
            return ""
      } catch(e) {
          return `Failed to suggest the chain: ${e}`
      }
  } else {
      return "Please use the recent version of keplr extension"
  }
}