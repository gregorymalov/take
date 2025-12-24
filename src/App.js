import React from 'react';
import './App.css';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import WhoWeAreSearching from './components/WhoWeAreSearching';
import AboutProject from './components/AboutProject';
import Benefits from './components/Benefits';
import CastingForm from './components/CastingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <VideoSection />
      <WhoWeAreSearching />
      <AboutProject />
      <Benefits />
      <CastingForm />
      <Footer />
    </div>
  );
}

export default App;
