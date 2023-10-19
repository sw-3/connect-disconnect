import React from "react";
import { Container } from "react-bootstrap";

import Navigation from "./Navigation";
import Header from "./Header";
import Poll from "./Poll";
import Footer from "./Footer";

function App() {

  return (
    <Container>
      <Navigation />
      <Header />
      <Poll />
      <Footer />
    </Container>
  )
}

export default App;
