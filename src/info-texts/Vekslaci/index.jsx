import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const Vekslaci = () => {
  return (
    <MoreAbout
      title={'Veksláci'}
      text={
        <div className="more">
          <div className="more__paragraph">
            Veksláky se nejčastěji stávali lidé, kteří přišli do styku se
            západními turisty a uměli jazyky. Byli to číšníci a jiní pracovníci
            v hotelech, turističtí průvodci, řidiči autobusů…
          </div>
          <div className="more__paragraph">
            Věnovali se nelegálnímu nákupu a prodeji cizích měn nebo bonů, těmi
            bylo možné nakupovat zahraniční zboží v prodejnách Tuzex, například
            džíny. Veksláci v osmdesátých letech zcela ovládali černý trh.
            Podnikání s valutami a bony je katapultovalo do úplně jiných pater
            životního standardu než zbytek československých občanů. Kromě
            velkých finančních prostředků mnoho z nich disponovalo dlouhým
            seznamem kontaktů mezi politiky, ale také obchodníky ze západu.
            Mnoho z těchto osob už za socialismu zasahovalo do chodu politiky a
            státní správy. Kdo uměl těchto příležitostí po revoluci využít,
            dostal se velmi vysoko.
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            Speciál ČT Toto 100letí:{' '}
            <a href="https://www.ceskatelevize.cz/specialy/totostoleti#/detail/v-5-27">
              Veksláci
            </a>
          </li>
          <li>
            Film{' '}
            <a href="https://www.csfd.cz/film/7037-bony-a-klid/prehled/">
              Bony a klid
            </a>
          </li>
        </ul>
      }
    />
  );
};
