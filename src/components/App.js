import React, { useState } from "react"
import { Container } from "react-bootstrap";
import { 
  useAddress,
  useContract,
} from "@thirdweb-dev/react";

import Navigation from "./Navigation";
import Header from "./Header";
import Poll from "./Poll";
import Footer from "./Footer";

import config from '../config.json';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [bestPetPollAddr, setBestPetPollAddr] = useState(null);
  const [bestPetPoll, setBestPetPoll] = useState(null);

  const chainId = '80001'

  //-------------------------------------------------------------------------//
  //---   Get connected to the blockchain first                           ---//
  //-------------------------------------------------------------------------//

  // get the connected smart wallet address
  const address = useAddress();
  if (address && (address !== walletAddress)) {
    setWalletAddress(address);
  }

  // get the Best Pet Poll smart contract
  if (!bestPetPollAddr) {
    setBestPetPollAddr(config[chainId].bestPetPoll.address);
  }

  const { contract, isLoading } = useContract(bestPetPollAddr);
  if (!isLoading && (contract !== bestPetPoll)) {
    setBestPetPoll(contract);
  }

  return (
    <Container>
      <Navigation />

      <Header
        walletAddress={walletAddress}
      />

      <Poll 
        walletAddress={walletAddress}
        bestPetPollAddr={bestPetPollAddr}
        bestPetPoll={bestPetPoll}
      />

      <Footer />
    </Container>
  )
}

export default App;
