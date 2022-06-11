import React from 'react';
import { MultipleChoice } from '../MultipleChoice';
import '../style.css';

export const Manicka = () => {
  return (
    <MultipleChoice
      imgSrc={'img/manicky2.jpg'}
      title="Máničky"
      quizText={
        <>
          <q>
            Snažili se mě přesvědčit, ať se ostříhám, že mi to nesluší. Ať jsem
            rozumný. Odmítl jsem. Tak mi řekli, že budu mít problémy.
          </q>
          <p className="author">Písničkář Jaroslav Hutka</p>
          <p>
            Které z osob na fotkách by mohly mít problémy kvůli svému účesu?
            Označ:
          </p>
        </>
      }
      optionType="image"
      options={{
        1: `/img/manicka1.jpg`,
        2: `/img/manicka2.jpg`,
        3: `/img/manicka3.jpg`,
        4: `/img/manicka4.jpg`,
      }}
      solution={{ 1: true, 2: true, 3: true, 4: false }}
    />
  );
};
