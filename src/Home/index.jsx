import React from 'react';
import { useState } from 'react';
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
      </div>
    </div>
    <Timeline />
  </main>
);

export default Home;
