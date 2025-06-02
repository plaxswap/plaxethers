// utils/web3modal.ts
import { createWeb3Modal, defaultConfig } from '@cocos-labs/web3modal-ethers5/react'

const polygonChain = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com',
}

const projectId = '9ba1c138ff7ad815f7026b920b652f0b'

const metadata = {
  name: 'plaxswap',
  description: 'PlaxSwap DEX',
  url: 'https://plaxswap.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

const ethersConfig = defaultConfig({
  metadata
})

createWeb3Modal({
  ethersConfig,
  chains: [polygonChain],
  projectId,
  enableAnalytics: true,
  allowUnsupportedChain: false,
  enableOnramp: false,
})
