import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { 
  useAddress,
  useContract,
  useContractRead,
  useContractWrite
} from "@thirdweb-dev/react";

import config from '../config.json';
import './App.css'

import catImage from "../images/cat_640.jpg"
import dogImage from "../images/dog_640.jpg"
import horseImage from "../images/horse_640.jpg"
import fishImage from "../images/fish_640.jpg"
import birdImage from "../images/parrot_640.jpg"
import reptileImage from "../images/lizard_640.jpg"

// set an initial value for the vote counts
const currentVotes = {
  Cat: 0,
  Dog: 0,
  Horse: 0,
  Fish: 0,
  Bird: 0,
  Reptile: 0,
};

function Poll() {

  const [votes, setVotes] = useState(currentVotes);

  var updatedVotes = votes;
  var votesChanged = false;

  // get the connected smart wallet address
  const walletAddress = useAddress();

  // get the Best Pet Poll smart contract
  const chainId = '80001'
  const { contract: bestPetPoll, isLoading, error } =
    useContract(config[chainId].bestPetPoll.address);
  //console.log(bestPetPoll);

  // get the contract's vote functions for later use
  const { mutateAsync: voteForCatAsync } = useContractWrite(
    bestPetPoll,
    "voteForCat",
  );

  //
  //------------------------------------------------------------------------//
  //   Get the current votes from the blockchain                            //
  //------------------------------------------------------------------------//

  // get Cat Votes
  const { data: catData } = useContractRead(
    bestPetPoll,
    "getCatVotes",
  );
  if (catData) {
    const catVotes = catData.toNumber();
    //console.log("Got Cat Votes from blockchain: ", catVotes)
    if (catVotes !== votes['Cat']) {
      updatedVotes['Cat'] = catVotes;
      votesChanged = true;
    }
  }

  // get Dog votes
  const { data: dogData } = useContractRead(
    bestPetPoll,
    "getDogVotes",
  );
  if (dogData) {
    const dogVotes = dogData.toNumber();
    //console.log("Got Dog Votes from blockchain: ", dogVotes)
    if (dogVotes !== votes['Dog']) {
      updatedVotes['Dog'] = dogVotes;
      votesChanged = true;
    }
  }

  // get Horse votes
  const { data: horseData } = useContractRead(
    bestPetPoll,
    "getHorseVotes",
  );
  if (horseData) {
    const horseVotes = horseData.toNumber();
    //console.log("Got Horse Votes from blockchain: ", horseVotes)
    if (horseVotes !== votes['Horse']) {
      updatedVotes['Horse'] = horseVotes;
      votesChanged = true;
    }
  }

  // get Fish votes
  const { data: fishData } = useContractRead(
    bestPetPoll,
    "getFishVotes",
  );
  if (fishData) {
    const fishVotes = fishData.toNumber();
    //console.log("Got Fish Votes from blockchain: ", fishVotes)
    if (fishVotes !== votes['Fish']) {
      updatedVotes['Fish'] = fishVotes;
      votesChanged = true;
    }
  }

  // get Bird votes
  const { data: birdData } = useContractRead(
    bestPetPoll,
    "getBirdVotes",
  );
  if (birdData) {
    const birdVotes = birdData.toNumber();
    //console.log("Got Bird Votes from blockchain: ", birdVotes)
    if (birdVotes !== votes['Bird']) {
      updatedVotes['Bird'] = birdVotes;
      votesChanged = true;
    }
  }

  // get Reptile votes
  const { data: reptileData } = useContractRead(
    bestPetPoll,
    "getReptileVotes",
  );
  if (reptileData) {
    const reptileVotes = reptileData.toNumber();
    //console.log("Got Reptile Votes from blockchain: ", reptileVotes)
    if (reptileVotes !== votes['Reptile']) {
      updatedVotes['Reptile'] = reptileVotes;
      votesChanged = true;
    }
  }

  //
  //------------------------------------------------------------------------//
  //   If any votes changed, update the App votes state                     //
  //------------------------------------------------------------------------//
  //
  if (votesChanged) {
    console.log("ON-CHAIN VOTES CHANGED: setting state for votes.");
    setVotes(updatedVotes);
    votesChanged = false;
  }


// SDW:  1) Need to handle the wallet connection properly ... No votes can be made
//       before the wallet is connected ... so use walletAddress ? below for it.
//       2) Also need the contract to be connected, so the isLoading flag

  const handleVote = (pet) => {
    switch(pet) {
    case 'Cat':
      voteForCatAsync({ args: [] });
      break;
    case 'Dog':

      break;
    case 'Horse':

      break;
    case 'Fish':

      break;
    case 'Bird':

      break;
    case 'Reptile':

      break;
    }
  };

  return (
    <div className="voting-section">
      {walletAddress ? (
        <>
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
        </>
      ) : (
        <div>
          <h1 className="title">Login to Vote!</h1>
          <p>Connect with your email or Google account...</p>
        </div>
      )}
    </div>
  );
}

export default Poll;
