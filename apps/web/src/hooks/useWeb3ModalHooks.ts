import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
  useWeb3Modal,
} from '@web3modal/ethers5/react';
import { providers } from 'ethers';

export function useActiveWeb3ModalReact() {
  const {
    address,
    isConnected,
  } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const w3provider = walletProvider
    ? new providers.Web3Provider(walletProvider)
    : undefined;

  return {
    w3account: address,
    w3provider,
    isW3Active: isConnected,
  };
}

export const useConnectWallet = () => {
  const { open } = useWeb3Modal();

  const connectWallet = () => {

      open();
  };

  return { connectWallet };
};