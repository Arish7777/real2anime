import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SocialProof from './components/SocialProof';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Hero />
        <About />
        <SocialProof />
      </Container>
    </div>
  );
}

export default App;
