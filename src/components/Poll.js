import React, { useState } from "react"
import { Button } from "react-bootstrap"
import './App.css'

import catImage from "../images/cat_640.jpg"
import dogImage from "../images/puppy_640.jpg"
import horseImage from "../images/horse_640.jpg"
import fishImage from "../images/fish_640.jpg"
import birdImage from "../images/parrot_640.jpg"
import reptileImage from "../images/lizard_640.jpg"

const initialVotes = {
  Cat: 0,
  Dog: 0,
  Horse: 0,
  Fish: 0,
  Bird: 0,
  Reptile: 0,
};

function Poll() {
  const [votes, setVotes] = useState(initialVotes);

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
