import React from 'react';
import { useState } from 'react';
import './style.css';

export const MoreAbout = ({ title, text, source }) => {
  return (
    <div className="more">
      <h3 className="more__title">{title}</h3>
      <div className="more__text more__paragraph">{text}</div>
      <h4>Další zdroje informací:</h4>
      <div className="more__source">{source}</div>
    </div>
  );
};

export const Solution = ({ content }) => {
  const [getSolution, setGetSolution] = useState(false);

  return (
    <>
      <button
        className="box__button box__button--more"
        onClick={() => setGetSolution(!getSolution)}
      >
        Řešení
      </button>
      <div className={getSolution ? 'solution--open' : 'solution'}>
        {content}
      </div>
    </>
  );
};
