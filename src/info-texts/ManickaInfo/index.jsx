import React from 'react';
import './style.css';
import { MoreAbout } from '../MoreAbout';

export const ManickaInfo = () => {
  return (
    <MoreAbout
      title={'Máničky'}
      text={
        <div className="more">
          <div className="more__paragraph">
            Během léta a podzimu 1966 bylo násilím ostříháno téměř čtyři tisíce
            mladých mužů. Dlouhovlasým byl zakazován přístup do škol, do
            restaurací, do vozů městské hromadné dopravy.
          </div>
          <div className="more__paragraph">
            V době normalizace se objevila kampaň pod výmluvným heslem „Máš-li
            dlouhý vlas, nechoď mezi nás“. Vlasatci byli líčeni jako nepřátelé
            režimu, alkoholici, narkomani a zločinci. Až do pádu režimu v roce
            1989 pokračovaly i přímé útoky na máničky, byly vyhazovány ze škol,
            práce, zatýkány atd. V roce 1974 bylo v Rudolfově zbito několik
            stovek mániček, které přijely na koncert skupiny The Plastic People
            of the Universe.
          </div>
          <div className="more__paragraph">
            Opatření mnohdy přinesla opačný výsledek, než komunisté zamýšleli.
            Perzekuce a násilí nakonec vedly k tomu, že mnozí z řad mániček se
            začali vůči režimu vymezovat, ač se původně o politiku nezajímali.
            Navíc masivní kampaň ve sdělovacích prostředcích paradoxně udělala
            komunitě mániček reklamu, a mnoho mladých mužů se s nimi začalo
            identifikovat.
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            ČT24:{' '}
            <a href="https://ct24.ceskatelevize.cz/domaci/1325666-policejni-akce-vlasatci-kniha-vratte-nam-vlasy-prinasi-nove-dokumenty">
              Policejní akce Vlasatci - kniha Vraťte nám vlasy přináší nové
              dokumenty
            </a>
          </li>
          <li>
            Válka.cz:{' '}
            <a href="https://www.valka.cz/14860-Neprizpusobivi-Studenti-manicky-a-dalsi-pohledem-ceskoslovenskych-mocenskych-organu">
              Nepřizpůsobiví - Studenti, máničky a další pohledem
              československých mocenských orgánů
            </a>
          </li>
        </ul>
      }
    />
  );
};
