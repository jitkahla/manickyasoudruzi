import React from 'react';
import { useState } from 'react';
import './style.css';
import Timeline from '../Timeline';

const Home = () => (
  <main>
    <div className="bg-img">
      <div className="container">
        <h1>Máničky a&nbsp;soudruzi</h1>
        <p>
          Mrkni na naši časovou osu a&nbsp;zjisti něco o&nbsp;komunismu
          v&nbsp;Československu
        </p>
      </div>
      s
    </div>
    <Timeline />
  </main>
);

export default Home;
