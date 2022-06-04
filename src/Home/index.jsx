import React from 'react';
import { useState } from 'react';
import osa from '../img/osa1.png';
import './style.css';
import Timeline from '../Timeline';

const Home = () => (
  <main>
    <div className="bg-img">
      <div className="container">
        <h1>Máničky a soudruzi</h1>
        <p>
          Mrkni na naši časovou osu a zjisti něco o komunismu v Československu
        </p>
        <Timeline />
      </div>
    </div>
  </main>
);

export default Home;
