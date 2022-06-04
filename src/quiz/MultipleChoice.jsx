import React from 'react';
import { useState } from 'react';

const initialState = {
  1: false,
  2: false,
  3: false,
  4: false,
};

export const MultipleChoice = () => {
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
    const solution = JSON.stringify({ 1: true, 2: true, 3: true, 4: false });
    if (JSON.stringify(selected) === solution) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  return (
    <div>
      <h2>Kvíz</h2>
      <h3>Máničky</h3>
      <q>
        {' '}
        Snažili se mě přesvědčit, ať se ostříhám, že mi to nesluší. Ať jsem
        rozumný. Odmítl jsem. Tak mi řekli, že budu mít problémy.
      </q>
      <p>Písničkář Jaroslav Hutka</p>
      <p>
        Které z osob na fotkách by mohly mít problémy kvůli svému účesu? Označ:
      </p>
      <div>
        {[...Array(4)].map((_, i) => (
          <img
            key={i + 1}
            id={i + 1}
            onClick={() => handleClick(i + 1)}
            src={`/img/manicka${i + 1}.png`}
            alt=""
            style={getImgStyle(i + 1)}
          />
        ))}
      </div>
      <button onClick={evaluate}>Hotovo</button>
      {result === true && <p>Výborně</p>}
      {result === false && <p>Špatně</p>}
    </div>
  );
};
