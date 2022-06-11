import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const ConcertsInfo = () => {
  return (
    <MoreAbout
      title={'Hudební underground'}
      text={
        <div className="more">
          <div className="more__paragraph">
            Populární hudba v Československu byla jednou z oblastí života, které
            se v období Pražského jara poněkud vymkly dohledu režimu. Za
            normalizace se hudebníci dostali zpět pod jeho kontrolu. Pořádaly se
            tzv. přehrávky, odborná kulturní komise posuzovala repertoár,
            znalosti hudební nauky nebo závadnost textů. Součástí byl i
            politický pohovor.
          </div>
          <div className="more__paragraph">
            Státní povolení se roku 1973 pokusila získat i kapela Plastic People
            of the Universe, která se později stala ikonou undergroundové scény
            a hvězdami ilegální hudební scény. Dočkala se následujícího
            vyjádření: „Složení vašeho repertoáru nezaručuje takový společenský
            dopad, aby bylo možné zprostředkování vašeho souboru Pražským
            kulturním střediskem.“
          </div>
          <div className="more__paragraph">
            Když někdo zkouškou neprošel, nesměl vůbec veřejně vystupovat.
            Obvyklým zdůvodněním byla nedostatečná umělecká úroveň, snaha
            zabránit přílivu kýče a komerce. Ve skutečnosti šlo ovšem především
            o politické důvody, cílem byla normalizace pop music, vyhnání
            znepokojivých témat a nekonformních zjevů.
          </div>
          <div className="more__paragraph">
            Hudební scéna se tím rozdělila – někteří odešli do undergroundu,
            smíření s tím, že si před lidmi zahrají jen párkrát ročně, tajně, na
            venkově, pod permanentní hrozbou policejního zátahu. Ti, kteří
            chtěli dál oficiálně vystupovat ve velkých sálech, museli otupit
            hrany a někteří rovnou přešli od rocku ke střednímu proudu.
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            Speciál ČT Toto 100letí:{' '}
            <a href="https://www.ceskatelevize.cz/specialy/totostoleti#/detail/v-5-21">
              Proces s Plastic People of the Universe
            </a>
          </li>
          <li>
            Paměť národa:{' '}
            <a href="Zkuste do toho vložit ten dělnickej vjem, radili normalizátoři muzikantům">
              Zkuste do toho vložit ten dělnickej vjem, radili normalizátoři
              muzikantům
            </a>
          </li>
        </ul>
      }
    />
  );
};
