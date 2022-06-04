import React from 'react';
import { useState } from 'react';

export const SingleChoiceItem = ({
  title,
  audioSrc,
  options,
  correctOption,
  resultText,
}) => {
  const [result, setResult] = useState(null);
  return (
    <div>
      <h4>{title}</h4>
      <audio controls src={audioSrc}></audio>
      <div>
        {options.map((text, i) => (
          <button
            key={i + 1}
            onClick={() => setResult(text === correctOption)}
            disabled={result !== null}
          >
            {text}
          </button>
        ))}
      </div>
      {result === true && <p>Výborně</p>}
      {result === false && <p>Špatně</p>}
      {result !== null && <div>Řešení: {resultText}</div>}
    </div>
  );
};
