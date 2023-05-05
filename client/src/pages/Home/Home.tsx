import React from 'react';
import './Home.scss';
import { Hero, Result, Services } from '../../components/index';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Services />
      <Result />
    </div>
  );
}

export default Home;
