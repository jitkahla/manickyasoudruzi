import React from 'react';

export const TimelineContent = ({ title, text, quiz, imgSrc }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      {quiz ? (
        <div className="controls">
          <button>Kvíz</button>
          <button>Více...</button>
        </div>
      ) : null}
      <img src={imgSrc} />
    </div>
  );
};
