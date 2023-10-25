import React, { useState } from "react"
import { Container } from "react-bootstrap";
import { 
  useAddress,
  useContract,
  useConnectionStatus
} from "@thirdweb-dev/react";

import Navigation from "./Navigation";
import Header from "./Header";

import config from '../config.json';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

/* these state variables hold an on-chain contract to interact with
 *
 *  const [contractAddr, setContractAddr] = useState(null);
 *  const [onChainContract, setOnChainContract] = useState(null);
*/

  const chainId = '80001'

  //-------------------------------------------------------------------------//
  //---   Get connected to the blockchain first                           ---//
  //-------------------------------------------------------------------------//

  // get the connection status
  const connectionStatus = useConnectionStatus();

  // get the connected smart wallet address
  const address = useAddress();

  // if the connected address changes, set the Wallet Address in the state.
  if ((typeof address === "string") && (address !== walletAddress)) {
    setWalletAddress(address);
  }

  // if the connected address is undefined and connection status is disconnected
  //    make sure to unset the wallet address in the React state
  if ((typeof address === "undefined") && (connectionStatus === "disconnected")) {

    if (walletAddress) {
      setWalletAddress(null);
    }
  }

/*
  //-------------------------------------------------------------------------//
  //---   Get the on-chain smart contract this app uses                   ---//
  //-------------------------------------------------------------------------//
  //
  // first, get the contract's address from the config.json file
  if (!contractAddr) {
    setContractAddr(config[chainId].contractName.contractAddress);
  }
  // next, get the on-chain contract
  const { contract, isLoading } = useContract(contractAddr);
  if (!isLoading && (contract !== onChainContract)) {
    setOnChainContract(contract);
  }
*/

  return (
    <Container>
      <Navigation
        walletAddress={walletAddress}
      />

      <Header
        walletAddress={walletAddress}
      />
    </Container>
  )
}

export default App;
