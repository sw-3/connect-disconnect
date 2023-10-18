import React, { useState } from "react"
import { Container, Button, Nav } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import './App.css'

import catImage from "./images/cat_640.jpg"
import dogImage from "./images/puppy_640.jpg"
import horseImage from "./images/horse_640.jpg"
import fishImage from "./images/fish_640.jpg"
import birdImage from "./images/parrot_640.jpg"
import reptileImage from "./images/lizard_640.jpg"
import logoImage from "./images/icon_640.jpg"

const initialVotes = {
  Cat: 0,
  Dog: 0,
  Horse: 0,
  Fish: 0,
  Bird: 0,
  Reptile: 0,
};

function SinglePage() {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (pet) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [pet]: prevVotes[pet] + 1,
    }));
  };

  return (
    <Container>
      <Navbar className='navigation-section' expand='lg'>
        <img
          alt="logo"
          src={logoImage}
          width="50"
          height="50"
          className="d-inline-block align-top mx-3"
        />
        <Navbar.Brand className="navbar-title">Best Pet Poll</Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Button className='login-button'>Login to Vote</Button>
        </Navbar.Collapse>
      </Navbar>

      <div className="header-section">
        <h1 className="title">Vote for the Best Pet</h1>
        <p>Login with your email or Google account... everyone gets 1 vote!</p>
        <p>Click the button to vote for which animal makes the best pet!</p>
      </div>

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
      <footer className="footer-section">
        {`created by SW3 Consulting, powered by `}
        <a href="https://thirdweb.com/account-abstraction" target="_blank">
          {`thirdweb`}
        </a>
        <Nav className="justify-content-center">
          <Nav.Link href="https://github.com/sw-3" target="_blank">GitHub</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/scottweberg/" target="_blank">LinkedIn</Nav.Link>
        </Nav>
      </footer>
    </Container>
  );
}

export default SinglePage;
