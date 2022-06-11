import React from 'react';
import { useState } from 'react';
import { PageRefresh } from '../PageRefresh';
import './style.css';

const getInitialState = (options) => {
  const defaultOptions = Object.entries(options).map(([i]) => {
    return [i, false];
  });
  return Object.fromEntries(defaultOptions);
};

export const MultipleChoice = ({
  title,
  quizText,
  options,
  solution,
  optionType,
  imgSrc,
}) => {
  const [selected, setSelected] = useState(getInitialState(options));
  const [result, setResult] = useState(null);
  const handleClick = (id) => {
    setSelected((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setResult(null);
  };

  const evaluate = () => {
    if (JSON.stringify(selected) === JSON.stringify(solution)) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  return (
    <div className="quiz__box">
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url(${imgSrc}), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <h2>Kvíz</h2>
      <h3>{title}</h3>
      {quizText}
      <div className="quiz__options">
        {Object.entries(options).map(([i, value]) => (
          <>
            {optionType === 'image' && (
              <img
                key={i}
                id={i}
                onClick={() => handleClick(i)}
                src={value}
                alt=""
                className={
                  selected[i]
                    ? 'selected__option button__options'
                    : 'button__options'
                }
              />
            )}
            {optionType === 'text' && (
              <button
                key={i}
                className={
                  selected[i]
                    ? 'selected__option button__options'
                    : 'button__options'
                }
                onClick={() => handleClick(i)}
              >
                {value}
              </button>
            )}
          </>
        ))}
      </div>
      <div className="controls">
        <button className="box__button" onClick={evaluate}>
          Vyhodnotit
        </button>
      </div>
      <div className="quiz__result">
        {result === true && (
          <p>
            Výborně, bez ztráty kytičky. Zasloužíš pochvalu před nastoupenou
            jednotkou a rozvinutou zástavou.
          </p>
        )}
        {result === false && (
          <p>
            Ouha, chybička se vloudila. Asi ti zrádní imperialisté zamotali
            hlavu.
          </p>
        )}
      </div>
      {/* <PageRefresh /> */}
    </div>
  );
};
