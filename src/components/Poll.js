import React, { useState } from "react"
import { 
  useContractRead,
  useContractWrite,
  Web3Button
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

const Poll = ({ walletAddress, bestPetPollAddr, bestPetPoll }) => {

  const [votes, setVotes] = useState(currentVotes);

  var updatedVotes = votes;
  var votesChanged = false;

  // get the contract's vote functions for later use
  const { mutateAsync: voteForCatAsync } = useContractWrite(
    bestPetPoll,
    "voteForCat",
  );

  const { mutateAsync: voteForDogAsync } = useContractWrite(
    bestPetPoll,
    "voteForDog",
  );

  const { mutateAsync: voteForHorseAsync } = useContractWrite(
    bestPetPoll,
    "voteForHorse",
  );

  const { mutateAsync: voteForFishAsync } = useContractWrite(
    bestPetPoll,
    "voteForFish",
  );

  const { mutateAsync: voteForBirdAsync } = useContractWrite(
    bestPetPoll,
    "voteForBird",
  );

  const { mutateAsync: voteForReptileAsync } = useContractWrite(
    bestPetPoll,
    "voteForReptile",
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
    setVotes(updatedVotes);
    votesChanged = false;
  }

  return (
    <div className="voting-section">
      <div className="voting-column">
        <div className="pet-label" key='Cat'>
          <h3>Cat Votes: {votes['Cat']}</h3>
          <img src={catImage} alt={`Cat logo`} className="pet-logo" />
          {walletAddress ? (
            <Web3Button
              contractAddress={bestPetPollAddr}
              action={() => voteForCatAsync({ args: [] })}
            >
              Vote for Cat
            </Web3Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Dog'>
          <h3>Dog Votes: {votes['Dog']}</h3>
          <img src={dogImage} alt={`Dog logo`} className="pet-logo" />
          {walletAddress ? (
            <Web3Button
              contractAddress={bestPetPollAddr}
              action={() => voteForDogAsync({ args: [] })}
            >
              Vote for Dog
            </Web3Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Horse'>
          <h3>Horse Votes: {votes['Horse']}</h3>
          <img src={horseImage} alt={`Horse logo`} className="pet-logo" />
          {walletAddress ? (
            <Web3Button
              contractAddress={bestPetPollAddr}
              action={() => voteForHorseAsync({ args: [] })}
            >
              Vote for Horse
            </Web3Button>
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
            <Web3Button
              contractAddress={bestPetPollAddr}
              action={() => voteForFishAsync({ args: [] })}
            >
              Vote for Fish
            </Web3Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Bird'>
          <h3>Bird Votes: {votes['Bird']}</h3>
          <img src={birdImage} alt={`Bird logo`} className="pet-logo" />
          {walletAddress ? (
            <Web3Button
              contractAddress={bestPetPollAddr}
              action={() => voteForBirdAsync({ args: [] })}
            >
              Vote for Bird
            </Web3Button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="pet-label" key='Reptile'>
          <h3>Reptile Votes: {votes['Reptile']}</h3>
          <img src={reptileImage} alt={`Reptile logo`} className="pet-logo" />
          {walletAddress ? (
            <Web3Button
              contractAddress={bestPetPollAddr}
              action={() => voteForReptileAsync({ args: [] })}
            >
              Vote for Reptile
            </Web3Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Poll;
