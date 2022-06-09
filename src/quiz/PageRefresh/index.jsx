import React from 'react';

export const PageRefresh = () => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <button onClick={refresh} className="box__button box__button--again">
      Zkusit znovu
    </button>
  );
};
