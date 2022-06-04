import React from 'react';
import Answer from './Answer';
import Question from './Question';
import './style.css';
import veronikaImg from '../img/veronika_profile.jpg';
import jitkaImg from '../img/jitka_profile.jpg';

const AboutUs = () => {
  return (
    <>
      <h2>O nás</h2>
      <div className="onas">
        <div className="manicka">
          <img
            className="profile-img"
            id="jitka-img"
            src={jitkaImg}
            alt="Jitka Hladká"
          />
          <h3>Jitka Hladká</h3>

          <Question text="Povolání?" />
          <Answer text="Bývalá účetní, budoucí junior front-end vývojářka" />
          <Question text="Co tě přimělo přihlásit se do Digitální akademie?" />
          <Answer text="Na rodičovské jsem objevila Czechitas a nadchla se pro práci v IT, potřebovala jsem změnu." />
          <Question text="Proč Máničky a soudruzi?" />
          <Answer text="Zajímá mě moderní historie, konkrétně období komunistického režimu. Je podle mě důležité připomínat, co se tenkrát dělo. Je škoda, že ve školách se tomuto období věnuje poměrně málo času, proto se snažíme zacílit především na děti." />
          <Question text="Co tě nabíjí?" />
          <Answer text="Běhání a jóga, procházky a dobrá káva." />
          <Question text="Co tě vybíjí?" />
          <Answer text="Arogance a přílišný pesimismus." />
          <Question text="Kdybys musela emigrovat, kam by to bylo a proč?" />
          <Answer text="Rozhodně někam k moři, Španělsko nebo Itálie." />
          <Question text="Kofola nebo Coca-Cola?" />
          <Answer text="A co takhle malinovka?" />
          <Question text="Jitka ve třech slovech:" />
          <Answer text="ještě to nevzdávám:-)" />
        </div>
        <div className="manicka">
          <img
            className="profile-img"
            id="veronika-img"
            src={veronikaImg}
            alt="Veronika Sesay"
          />
          <h3>Veronika Sesay</h3>

          <Question text="Povolání?" />
          <Answer text="Event manažerka" />
          <Question text="Co tě přimělo přihlásit se do Digitální akademie?" />
          <Answer text="Chtěla bych změnit obor a najít si kreativnější práci." />
          <Question text="Proč Máničky a soudruzi?" />
          <Answer text="Moderní historie mě baví a myslím, že projekty tohoto typu mají smysl. Velmi často se setkávám s názorem, že historie je ve škole vlastně taková nadstavba, vždyť to vlastně k ničemu pořádně není... S tím nesouhlasím a chtěla bych tedy vytvořit něco, co dětem zábavnou formou tu historii přiblíží a může pomoct tento pohled změnit." />
          <Question text="Co tě nabíjí?" />
          <Answer text="Ruční práce všeho druhu, přátelé a rodina, cestování, vaření a pečení." />
          <Question text="Co tě vybíjí?" />
          <Answer text="Administrativní činnosti a setkání s blbcem." />
          <Question text="Kdybys musela emigrovat, kam by to bylo a proč?" />
          <Answer text="Doufám, že tato situace nikdy nenastane, ale kdyby ano, tak určitě někam do anglofonního světa. Taková Austrálie by nemusela být špatná - pláže, teplo, relax...😎 " />
          <Question text="Kofola nebo Coca-Cola?" />
          <Answer text="Určitě Kofola." />
          <Question text="Veronika ve třech slovech:" />
          <Answer text="Třeba tři V: výřečná, vtipná, veselá." />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
