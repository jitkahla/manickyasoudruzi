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
      <div className="interpret__options">
        {options.map((text, i) => (
          <button
            key={i + 1}
            onClick={() => setResult(text)}
            disabled={result !== null}
            className={
              result === text
                ? 'interpret__name selected__option button__options'
                : 'interpret__name button__options'
            }
          >
            {text}
          </button>
        ))}
      </div>
      <div className="interpret__result">
        {result === correctOption && <p>Skvělé!</p>}
        {result !== correctOption && result !== null && (
          <p>Bohužel, tady ses netrefil.</p>
        )}
        {result !== null && <p>Řešení: {resultText}</p>}
      </div>
    </div>
  );
};
