
import { Button, ButtonProps } from '@pancakeswap/uikit'

import { PropsWithChildren, useEffect, useState } from 'react'
import { useActiveWeb3ModalReact, useConnectWallet } from 'hooks/useWeb3ModalHooks';
import useAuth from 'hooks/useAuth'
import { ConnectorNames } from 'config/wallet'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { useActiveHandle } from 'hooks/useEagerConnect.bmp.ts'

const ConnectWalletButton = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  const { w3account, isW3Active } = useActiveWeb3ModalReact();
  const { connectWallet } = useConnectWallet();
  const { login } = useAuth()
  const handleActive = useActiveHandle()

  const [isConnecting, setIsConnecting] = useState(false)
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  const handleClick = async () => {
    if (typeof __NEZHA_BRIDGE__ !== 'undefined') {
      handleActive()
    } else {
      setIsConnecting(true)
      try {
        await connectWallet()
      } catch (err) {
        console.error(err)
      } finally {
        setIsConnecting(false)
      }
    }
  }

  useEffect(() => {
    if (isW3Active && !hasLoggedIn) {
      login(ConnectorNames.Injected)
      setHasLoggedIn(true)
    }
  }, [isW3Active, hasLoggedIn])

  return (
    <>
      <Button onClick={handleClick} disabled={isConnecting} {...props}>
      {isConnecting ? 'Connecting...' : children || 'Connect Wallet'}
    </Button>
      
    </>
  )
}

export default ConnectWalletButton
