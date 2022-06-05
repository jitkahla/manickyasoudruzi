import React from 'react';

export const MoreAbout = ({ title, text }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{text}</div>
      <button>Méně</button>
    </div>
  );
};
