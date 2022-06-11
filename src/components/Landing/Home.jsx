import React from 'react';

import Header from './Header';
import HeroHome from './HeroHome';
import FeaturesHome from './Features';
import FeaturesBlocks from './FeaturesBlocks';

import Footer from './Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;