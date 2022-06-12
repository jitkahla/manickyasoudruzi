import React from 'react';
import { Solution } from '../../info-texts/MoreAbout';
import { MultipleChoice } from '../MultipleChoice';
import '../style.css';
import { ManickaInfo } from '../../info-texts/ManickaInfo';

export const Manicka = () => {
  return (
    <>
      <MultipleChoice
        imgSrc={'img/manicky2.jpg'}
        title="Máničky"
        quizText={
          <>
            <q>
              Snažili se mě přesvědčit, ať se ostříhám, že mi to nesluší. Ať
              jsem rozumný. Odmítl jsem. Tak mi řekli, že budu mít problémy.
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
        correctAnswer={
          'Výborně, bez ztráty kytičky. Zasloužíš pochvalu před nastoupenou jednotkou a rozvinutou zástavou.'
        }
        wrongAnswer={
          'Ouha, chybička se vloudila. Asi ti zrádní imperialisté zamotali hlavu.'
        }
      />
      <Solution content={<ManickaInfo />} />
    </>
  );
};
