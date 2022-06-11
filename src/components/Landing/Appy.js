import React from 'react';

import Hero from './Hero';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';

import Footer from './Footer';

const Landing = () => {
  return (
    <div id="app">
     
      <Hero />
      <Exemplar />
      <Features />
      <About />
      <LatestNews />

      <Footer />
    </div>
  );
};

export default Landing ;