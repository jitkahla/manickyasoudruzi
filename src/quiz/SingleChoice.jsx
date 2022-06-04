import React from 'react';
import { useState } from 'react';
import { SingleChoiceItem } from './SingleChoiceItem';

export const SingleChoice = () => {
  return (
    <div>
      <h2>Kvíz</h2>
      <h3></h3>
      <p>
        Poslechni si následující audio ukázky z 80.let 20.století. Poznáš
        interpreta?
      </p>
      <SingleChoiceItem
        title={'Ukázka 1'}
        audioSrc={'/audio/ukazka1.mp3'}
        options={[
          'Plastic People of the Universe',
          'Hana Zagorová, Stanislav Hložek, Petr Kotvald',
          'Marta Kubišová a Karel Gott',
        ]}
        correctOption={'Hana Zagorová, Stanislav Hložek, Petr Kotvald'}
        resultText={
          'Hana Zagorová, Stanislav Hložek, Petr Kotvald - Diskohrátky, rok 1981 (originál: Loco-motion)'
        }
      />
      <SingleChoiceItem
        title={'Ukázka 2'}
        audioSrc={'/audio/ukazka2.mp3'}
        options={['Olympic', 'Jasná páka', 'Plastic People of the Universe']}
        correctOption={'Plastic People of the Universe'}
        resultText={'Plastic People of the Universe - Hovězí porážka, rok 1984'}
      />
      <SingleChoiceItem
        title={'Ukázka 3'}
        audioSrc={'/audio/ukazka3.mp3'}
        options={['Dalibor Janda', 'Michal David', 'František Nedvěd']}
        correctOption={'Dalibor Janda'}
        resultText={'Dalibor Janda - Hurikán, rok 1986'}
      />
      <SingleChoiceItem
        title={'Ukázka 4'}
        audioSrc={'/audio/ukazka4.mp3'}
        options={['Kroky Františka Janečka', 'Pražský výběr', 'Arakain']}
        correctOption={'Pražský výběr'}
        resultText={'Pražský výběr - Na václavském Václaváku, rok 1982'}
      />
      <SingleChoiceItem
        title={'Ukázka 5'}
        audioSrc={'/audio/ukazka5.mp3'}
        options={['Miroslav Žbirka', 'Jaromír Nohavica', 'Richard Müller']}
        correctOption={'Miroslav Žbirka'}
        resultText={'Miroslav Žbirka - 22 dní, rok 1984'}
      />
    </div>
  );
};
