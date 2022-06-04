import React from 'react';
import { MultipleChoice } from '../quiz/MultipleChoice';
import './style.css';
import { Shopping } from '../quiz/Shopping';
import { SingleChoice } from '../quiz/SingleChoice';

const AboutProject = () => {
  return (
    <main>
      <h2>O projektu</h2>
      <div className="project-info">
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
