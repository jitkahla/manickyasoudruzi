import React from 'react';
import './style.css';
import { MoreAbout } from '../MoreAbout';

export const Feb1948 = () => {
  return (
    <>
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url('img/unor48.jpg'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <MoreAbout
        title={'Únor 1948'}
        text={
          <div className="more">
            <div className="more__paragraph">
              Komunistická strana se minimálně od konce války snažila vytvořit
              podmínky, jež by jí umožnily chopit se veškeré moci ve státě.
              Postupně se jí podařilo obsadit všechna důležitá místa v
              bezpečnostním aparátu i armádě. Pomáhala i nálada ve společnosti,
              obyvatelstvo bylo otevřenější levicovým názorům. Svou
              populistickou politikou a neustálým vyvoláváním sporů s jinými
              politickými stranami destabilizovala KSČ politickou situaci v
              Československu.
            </div>
            <div className="more__paragraph">
              Vládní krize vyvrcholila 20. února 1948. Toho dne na protest proti
              personálním změnám ministra vnitra Noska v SNB podalo dvanáct
              nekomunistických ministrů do rukou prezidenta demisi.
              Následujícího dne komunisté svolali masovou demonstraci na
              Staroměstské náměstí a začali vytvářet tzv. Akční výbory Národní
              fronty, které postupně přebíraly řízení podniků či místní
              samosprávy. Zformovaly se Lidové milice. 23. února ministerstvo
              vnitra omezilo činnost nekomunistických stran, začalo docházet k
              prvnímu zatýkání i domovním prohlídkám. Demokratické strany byly
              de facto paralyzovány a své naděje vložily do prezidenta Edvarda
              Beneše. Ten byl vystaven silnému nátlaku komunistů i zástupců
              dělnického hnutí a odborů.
            </div>
            <div className="more__paragraph">
              25. února 1948 přijal demisi nekomunistických ministrů a dal tím
              Gottwaldovi volnou ruku při sestavování nové vlády. Cesta k
              nastolení totalitního režimu tak byla otevřena.
            </div>
          </div>
        }
        source={
          <ul>
            <li>
              My jsme to nevzdali:{' '}
              <a href="https://www.myjsmetonevzdali.cz/temata/nastup-komunismu-a-padesata-leta/unor-1948/">
                Únor 1948
              </a>
            </li>
            <li>
              Totalita.cz{' '}
              <a href="https://www.totalita.cz/1948/1948.php">Únor 1948</a>
            </li>
            <li>
              Paměť národa{' '}
              <a href="https://www.pametnaroda.cz/cs/magazin/stalo-se/komunisticky-prevrat-v-unoru-1948">
                Komunistický převrat v únoru 1948
              </a>
            </li>
          </ul>
        }
      />
    </>
  );
};
