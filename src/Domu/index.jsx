import React from 'react';
import { useState } from 'react';
import osa from '../img/osa1.png';
import './style.css';

const Domu = () => {
  const [timelineDisplay, setTimelineDisplay] = useState(false);
  return (
    <main>
      <div className="bg-img">
        <div className="container">
          <h1>Máničky a soudruzi</h1>
          <p>
            Mrkni na naši časovou osu a zjisti něco o komunismu v Československu
          </p>
          <a
            href="#timeline"
            onClick={() => {
              setTimelineDisplay(!timelineDisplay);
            }}
            className="start"
          >
            Start
          </a>
        </div>
      </div>
      {timelineDisplay ? <Osa /> : null}
    </main>
  );
};

const Osa = () => {
  return (
    <>
      <h2 id="timeline">Časová osa</h2>
      <div className="timeline">
        Tady bude v budoucnu naše časová osa, zatím není ještě hotová, ale
        usilovně na ní pracujeme. Podívej se zatím na náš návrh.
        <figure>
          <img src={osa} alt="Návrh časové osy" />
          <figcaption>Návrh časové osy</figcaption>
        </figure>
      </div>
    </>
  );
};

export default Domu;
