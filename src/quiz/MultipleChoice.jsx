import React from 'react';
import { useState } from 'react';

const initialState = {
  1: false,
  2: false,
  3: false,
  4: false,
};

export const MultipleChoice = ({ title, quizText, options, solution }) => {
  const [selected, setSelected] = useState(initialState);
  const [result, setResult] = useState(null);
  const handleClick = (id) => {
    setSelected((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setResult(null);
  };
  const getImgStyle = (id) =>
    selected[id] ? { border: '2px solid red' } : null;

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
        {Object.entries(options).map(([i, src]) => (
          <img
            key={i}
            id={i}
            onClick={() => handleClick(i)}
            src={src}
            alt=""
            style={getImgStyle(i)}
          />
        ))}
      </div>
      <button onClick={evaluate}>Hotovo</button>
      {result === true && <p>Výborně</p>}
      {result === false && <p>Špatně</p>}
    </div>
  );
};
