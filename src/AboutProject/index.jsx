import React from 'react';
import './style.css';

const AboutProject = () => {
  return (
    <main>
      <h2>O projektu</h2>
      <div className="project-info">
        <p>
          Máničky a soudruzi jsou projektem věnovaným moderní historii, v co
          nejpoutavější formě s interaktivními prvky. Zpracovaly jsme výběr
          několika zajímavých témat z období let 1948 - 1989, tzv.
          komunistického režimu v tehdejším Československu. Web je kombinací
          lehčích i vážných témat, např. jak vypadal běžný život v
          Československu, proč se pořádaly zakázané koncerty, kam bylo možno
          vycestovat, jak vypadaly máničky nebo třeba politické monstrprocesy a
          okupace.{' '}
        </p>
        <p>
          Několik hlavních textů doprovázejí kvízové otázky s různým typem
          obsahu - otázky obsahují obrázky k výběru, objekty k rozřazení, audio,
          video či interaktivní mapu. Web je primárně zamýšlen pro žáky ZŠ, ale
          může posloužit i širší veřejnosti se zájmem o naši nedávnou historii.
        </p>
        <p>
          Rády bychom tímto poděkovaly organizaci <strong>Post Bellum</strong>{' '}
          za poskytnutí některých materiálů v rámci projektů{' '}
          <strong>Paměť národa</strong> a {''} <strong>Toto 100letí</strong> (ve
          spolupráci s Českou Televizí).
        </p>
      </div>
    </main>
  );
};

export default AboutProject;
