import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { 
  useContractRead,
  useContractWrite
} from "@thirdweb-dev/react";

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

const Poll = ({ walletAddress, bestPetPoll }) => {

  const [votes, setVotes] = useState(currentVotes);

  var updatedVotes = votes;
  var votesChanged = false;

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
      <div className="voting-column">
        <div className="pet-label" key='Cat'>
          <h3>Cat Votes: {votes['Cat']}</h3>
          <img src={catImage} alt={`Cat logo`} className="pet-logo" />
          {walletAddress ? (
            <Button variant="primary" size="lg" onClick={() => handleVote('Cat')}>
              Vote for Cat
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Dog'>
          <h3>Dog Votes: {votes['Dog']}</h3>
          <img src={dogImage} alt={`Dog logo`} className="pet-logo" />
          {walletAddress ? (
            <Button variant="primary" size="lg" onClick={() => handleVote('Dog')}>
              Vote for Dog
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Horse'>
          <h3>Horse Votes: {votes['Horse']}</h3>
          <img src={horseImage} alt={`Horse logo`} className="pet-logo" />
          {walletAddress ? (
            <Button variant="primary" size="lg" onClick={() => handleVote('Horse')}>
              Vote for Horse
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="voting-column">
        <div className="pet-label" key='Fish'>
          <h3>Fish Votes: {votes['Fish']}</h3>
          <img src={fishImage} alt={`Fish logo`} className="pet-logo" />
          {walletAddress ? (
            <Button variant="primary" size="lg" onClick={() => handleVote('Fish')}>
              Vote for Fish
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Bird'>
          <h3>Bird Votes: {votes['Bird']}</h3>
          <img src={birdImage} alt={`Bird logo`} className="pet-logo" />
          {walletAddress ? (
            <Button variant="primary" size="lg" onClick={() => handleVote('Bird')}>
              Vote for Bird
            </Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Reptile'>
          <h3>Reptile Votes: {votes['Reptile']}</h3>
          <img src={reptileImage} alt={`Reptile logo`} className="pet-logo" />
          {walletAddress ? (
            <Button variant="primary" size="lg" onClick={() => handleVote('Reptile')}>
              Vote for Reptile
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Poll;
