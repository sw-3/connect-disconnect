import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { 
  useAddress,
  useContract,
  useContractRead
} from "@thirdweb-dev/react";
//import { ethers, BigNumber } from 'ethers'

//import config from '../config.json';
import './App.css'

import catImage from "../images/cat_640.jpg"
import dogImage from "../images/puppy_640.jpg"
import horseImage from "../images/horse_640.jpg"
import fishImage from "../images/fish_640.jpg"
import birdImage from "../images/parrot_640.jpg"
import reptileImage from "../images/lizard_640.jpg"

// set an initial value for the vote counts
const currentVotes = {
  Cat: 1,
  Dog: 1,
  Horse: 1,
  Fish: 1,
  Bird: 1,
  Reptile: 1,
};

/******************************
useContractVotes(_contract) {

  var votes = {
    Cat: 1,
    Dog: 1,
    Horse: 1,
    Fish: 1,
    Bird: 1,
    Reptile: 1
  };

  const { data, isLoading, error } = useContractRead(
    _contract,
    "getCatVotes",
  );
  votes['Cat'] = data;

  return [votes, isLoading, error];
};
***************************************/

function Poll() {
  var catVotes = 1;

  const [votes, setVotes] = useState(currentVotes);
  //const [isLoading, setIsLoading] = useState(true);
  console.log("Initialized votes:\n", votes);

  // get the connected wallet
  const walletAddress = useAddress();
  console.log(`connected wallet: ${walletAddress}`);

  // get the contract
  const { contract: bestPetPoll } = useContract("0xf6B35b22C9dB8caD52e537012AB569E71CB3e532");
  console.log("bestPetPoll contract:\n", bestPetPoll);

  // get the current votes from the blockchain
  const { data, isLoading, error } = useContractRead(
    bestPetPoll,
    "getCatVotes",
  );
  if (data) {
    catVotes = data.toNumber();
  }

  console.log("catVotes: ", catVotes);
  if (catVotes != votes['Cat']) {
    console.log("ON-CHAIN CAT VOTES CHANGED! SETTING STATE for CAT Votes!!")
    setVotes((prevVotes) => ({
      ...prevVotes,
      ['Cat']: catVotes,
    }));
  }

  /*
  const { data: dogVotes } = useContractRead(
    bestPetPoll,
    "getDogVotes",
  );
  const { data: horseVotes } = useContractRead(
    bestPetPoll,
    "getHorseVotes",
  );
  const { data: fishVotes } = useContractRead(
    bestPetPoll,
    "getFishVotes",
  );
  const { data: birdVotes } = useContractRead(
    bestPetPoll,
    "getBirdVotes",
  );
  const { data: reptileVotes } = useContractRead(
    bestPetPoll,
    "getReptileVotes",
  );
*/
//  currentVotes['Cat'] = catVotes;
//  setVotes(currentVotes);
  console.log("Current vote counts:\n", votes);

  /* get the current votes from the blockchain
  returnData = useContractVotes(bestPetPoll);
  votes = returnData[0];
  isLoading = returnData[1];
  error = returnData[2];


  if (isLoading) {
    console.log("contract still loading...");
  }
  else if (error) {
    console.error("failed to get votes", error);
  }
  else {
    console.log("votes:\n", votes);
  }
*/


  const handleVote = (pet) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [pet]: prevVotes[pet] + 1,
    }));
  };


  return (
    <div className="voting-section">
      <div className="voting-column">
        <div className="pet-label" key='Cat'>
          <h3>Cat</h3>
          <img src={catImage} alt={`Cat logo`} className="pet-logo" />
          <Button variant="primary" onClick={() => handleVote('Cat')}>
            Vote for {`Cat\n`}
            <span className="vote-count"><strong>Votes: {votes['Cat']}</strong></span>
          </Button>
        </div>
        <div className="pet-label" key='Dog'>
          <h3>Dog</h3>
          <img src={dogImage} alt={`Dog logo`} className="pet-logo" />
          <Button variant="primary" onClick={() => handleVote('Dog')}>
            Vote for {`Dog\n`}
            <span className="vote-count"><strong>Votes: {votes['Dog']}</strong></span>
          </Button>
        </div>
        <div className="pet-label" key='Horse'>
          <h3>Horse</h3>
          <img src={horseImage} alt={`Horse logo`} className="pet-logo" />
          <Button variant="primary" onClick={() => handleVote('Horse')}>
            Vote for {`Horse\n`}
            <span className="vote-count"><strong>Votes: {votes['Horse']}</strong></span>
          </Button>
        </div>
      </div>
      <div className="voting-column">
        <div className="pet-label" key='Fish'>
          <h3>Fish</h3>
          <img src={fishImage} alt={`Fish logo`} className="pet-logo" />
          <Button variant="primary" onClick={() => handleVote('Fish')}>
            Vote for {`Fish\n`}
            <span className="vote-count"><strong>Votes: {votes['Fish']}</strong></span>
          </Button>
        </div>
        <div className="pet-label" key='Bird'>
          <h3>Bird</h3>
          <img src={birdImage} alt={`Bird logo`} className="pet-logo" />
          <Button variant="primary" onClick={() => handleVote('Bird')}>
            Vote for {`Bird\n`}
            <span className="vote-count"><strong>Votes: {votes['Bird']}</strong></span>
          </Button>
        </div>
        <div className="pet-label" key='Reptile'>
          <h3>Reptile</h3>
          <img src={reptileImage} alt={`Reptile logo`} className="pet-logo" />
          <Button variant="primary" onClick={() => handleVote('Reptile')}>
            Vote for {`Reptile\n`}
            <span className="vote-count"><strong>Votes: {votes['Reptile']}</strong></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Poll;
