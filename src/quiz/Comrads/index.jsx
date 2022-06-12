import React from 'react';
import { ComradInfo } from '../../info-texts/ComradInfo';
import { Solution } from '../../info-texts/MoreAbout';
import { MultipleChoice } from '../MultipleChoice';

export const Comrads = () => {
  return (
    <>
      <MultipleChoice
        imgSrc={'img/slansky.jpg'}
        title="Soudruzi na věčné časy?"
        quizText={
          <>
            <p>
              Prohlédněte si následující video a pokuste se určit jaký byl
              skutečný záměr tohoto procesu (vyberte všechny možné správné
              odpovědi).
            </p>
            <video controls width="600" src="/video/slansky-video.mp4"></video>
          </>
        }
        optionType="text"
        options={{
          1: 'Proces byl zkonstruován na výstrahu a varování všem komunistickým státům proti odchylkám od sovětské politiky.',
          2: 'Proces byl součástí antisemitské propagandistické kampaně.',
          3: 'Cílem procesu bylo ovlivnit veřejné mínění, ukázat na přítomnost tzv. vnitřního nepřítele a zastrašit tak případné další odpůrce režimu.',
          4: 'Cílem bylo povzbudit pracující k vyšší produktivitě a dalšímu budování komunismu',
          5: 'Proces neměl žádný vedlejší cíl, jednalo se o standardní trestní řízení dle tehdy platných zákonů.',
        }}
        solution={{ 1: true, 2: true, 3: true, 4: true, 5: false }}
      />
      <Solution content={<ComradInfo />} />
    </>
  );
};
