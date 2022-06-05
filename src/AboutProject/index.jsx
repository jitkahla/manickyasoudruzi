import React, { useState } from 'react';
import { MultipleChoice } from '../quiz/MultipleChoice';
import './style.css';
import { Shopping } from '../quiz/Shopping';
import { SingleChoice } from '../quiz/SingleChoice/SingleChoice';

const AboutProject = () => {
  return (
    <main>
      <h2>O projektu</h2>
      <div className="project-info">
        <MultipleChoice
          title="Máničky"
          quizText={
            <>
              <q>
                {' '}
                Snažili se mě přesvědčit, ať se ostříhám, že mi to nesluší. Ať
                jsem rozumný. Odmítl jsem. Tak mi řekli, že budu mít problémy.
              </q>
              <p>Písničkář Jaroslav Hutka</p>
              <p>
                Které z osob na fotkách by mohly mít problémy kvůli svému účesu?
                Označ:
              </p>
            </>
          }
          options={{
            1: `/img/manicka1.png`,
            2: `/img/manicka2.png`,
            3: `/img/manicka3.png`,
            4: `/img/manicka4.png`,
          }}
          solution={{ 1: true, 2: true, 3: true, 4: false }}
        />
        <SingleChoice />
        <Shopping />
        <p>
          Rády bychom vytvořily web věnovaný moderní historii, v co
          nejpoutavější formě s interaktivními prvky. Zpracujeme výběr několika
          zajímavých témat z období let 1948 - 1989, tzv. komunistického režimu
          v tehdejším Československu. Proč se pořádaly zakázané koncerty, co to
          znamenalo odejít do exilu, co provedli političtí vězni, jak donášel
          agent Stb, jak vypadaly máničky apod.{' '}
        </p>
        <p>
          Hlavní texty budou doprovázet kvízové otázky. Rády bychom poukázaly na
          to, jak mohlo rozhodnutí jednotlivce ovlivňovat a určovat jeho
          studium, kariéru nebo volný čas. Web je primárně zamýšlen pro žáky ZŠ,
          případně pro širší veřejnost se zájmem o naši nedávnou historii.
        </p>
      </div>
    </main>
  );
};

export default AboutProject;
