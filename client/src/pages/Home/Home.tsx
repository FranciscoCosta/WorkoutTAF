import React from 'react';
import './Home.scss';
import { Hero, Services } from '../../components/index';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Services />
    </div>
  );
}

export default Home;
