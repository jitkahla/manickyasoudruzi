import React from 'react';
import { useState } from 'react';
import { PageRefresh } from '../PageRefresh';

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
    <div>
      <h2>Kvíz</h2>
      <h3>{title}</h3>
      {quizText}
      <div>
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
      <div>
        <button className="box__button" onClick={evaluate}>
          Hotovo
        </button>
        {result === true && <p>Výborně</p>}
        {result === false && <p>Špatně</p>}
      </div>
      <PageRefresh />
    </div>
  );
};
