import React, { useState } from "react";
import { Container, Button, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import './App.css';

import logoImage from "./logo192.png";

const initialVotes = {
  Cat: 0,
  Dog: 0,
  Horse: 0,
  Fish: 0,
  Reptile: 0,
  Bird: 0,
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
          {['Cat', 'Dog', 'Horse'].map((pet) => (
            <div className="pet-label" key={pet}>
              <h3>{pet}</h3>
              <img src={logoImage} alt={`${pet} logo`} className="pet-logo" />
              <Button variant="primary" onClick={() => handleVote(pet)}>
                Vote for {`${pet}\n`}
                <span className="vote-count"><strong>Votes: {votes[pet]}</strong></span>
              </Button>
            </div>
          ))}
        </div>
        <div className="voting-column">
          {['Fish', 'Reptile', 'Bird'].map((pet) => (
            <div className="pet-label" key={pet}>
              <h3>{pet}</h3>
              <img src={logoImage} alt={`${pet} logo`} className="pet-logo" />
              <Button variant="primary" onClick={() => handleVote(pet)}>
                Vote for {`${pet}\n`}
                <span className="vote-count"><strong>Votes: {votes[pet]}</strong></span>
              </Button>
            </div>
          ))}
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
