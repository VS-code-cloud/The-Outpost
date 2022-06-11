import React from 'react';

import Hero from './Hero';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';

import Footer from './Footer';
import './styles.css'

const Landing = () => {
  return (
    <div>
      <h1>The Outpost</h1>
      <h3>Your way to recycle</h3>
      <p>The best way to give your old things to someone else.</p> 
      <p>Start by <a href="/auth">creating an account</a>.</p>
    </div>
  );
};


export default Landing ;