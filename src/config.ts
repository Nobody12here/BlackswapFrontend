import { http, createConfig } from 'wagmi'
import { mainnet,bxn} from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, bxn],
  transports: {
    [mainnet.id]: http(),
    [bxn.id]: http(),
  },
})