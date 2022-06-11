import React from 'react';
import './style.css';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineContent } from '../TimelineContent';
import { Comrads } from '../quiz/Comrads';
import { Map } from '../quiz/Map';
import { Manicka } from '../quiz/Manicka';
import { SingleChoice } from '../quiz/SingleChoice/SingleChoice';
import { Shopping } from '../quiz/Shopping';
import { Feb1948 } from '../info-texts/Feb1948';
import { ComradInfo } from '../info-texts/ComradInfo';
import { MapInfo } from '../info-texts/MapInfo';
import { PragueSpring } from '../info-texts/PragueSpring';
import { ManickaInfo } from '../info-texts/ManickaInfo';
import { ShoppingInfo } from '../info-texts/ShoppingInfo';
import { ConcertsInfo } from '../info-texts/ConcertsInfo';
import { Occupation } from '../info-texts/Occupation';
import { Cecka } from '../info-texts/Cecka';
import { Vekslaci } from '../info-texts/Vekslaci';
import { Revolution } from '../info-texts/Revolution';

const Timeline = () => (
  <VerticalTimeline
    lineColor={'#000000'}
    layout={'2-columns'}
    className={'timeline-transition'}
  >
    <TimelineContent
      year={'1948'}
      title={'Komunisté se ujali moci'}
      text={
        'Zvláštností komunistického převratu v Československu, ve srovnání s obdobnými procesy v jiných státech východní Evropy, byla skutečnost, že proběhl za podpory velké části obyvatelstva.'
      }
      quiz={false}
      imgSrc={'/img/unor48.jpg'}
      moreInfo={<Feb1948 />}
    />
    <TimelineContent
      year={'1952'}
      title={'Soudruzi na věčné časy?'}
      text={
        'Nástup komunismu v Československu s sebou z dnešního pohledu přinesl i rozdělení společnosti na komunistické soudruhy a třídní nepřátele. Komunističtí soudruzi se pak ihned začali zbavovat svých třídních nepřátel, tedy lidí s odlišným politickým viděním světa, buržoazie, inteligence… Zdálo by se, že tedy být na té “správné” straně je vcelku jednoduchá záležitost a stačí k tomu stranická knížka KSČ a zápal pro věc. Obludnost komunistického totalitního režimu ale spočívala v tom, že na druhé straně barikády se mohl ocitnout najednou i ten, který likvidační mašinerii oponentů sám pomáhal budovat.'
      }
      quiz={<Comrads />}
      imgSrc={'/img/slansky.jpg'}
      moreInfo={<ComradInfo />}
    />
    <TimelineContent
      year={'1960'}
      title={'Cestování za socialismu'}
      text={
        'Otevřené hranice, takřka neomezené možnosti výběru destinace a minimální administrativa spojená s výjezdem do zahraničí jsou pro nás v podstatě samozřejmostí. Z tohoto pohodlí nás možná nakrátko vytrhly různé covidové semafory a lockdowny, ale starší generace si podobný “semafor” pamatují z celého období komunismu. Vyjet ven bylo zkrátka privilegium, kterého se nedostávalo všem.'
      }
      quiz={<Map />}
      imgSrc={'/img/cestovani.jpg'}
      moreInfo={<MapInfo />}
    />
    <TimelineContent
      year={'1966'}
      title={'Máničky'}
      text={
        'Režim líčil dlouhovlasé muže jako špinavé hašišáky. Lidé byli odváženi na služebnu a násilím stříháni. Příslušníci Veřejné bezpečnosti rozháněli koncerty a brutálně zakročovali proti těm, kteří si přišli jen poslechnout hudbu.'
      }
      quiz={<Manicka />}
      imgSrc={'img/manicky.jpg'}
      moreInfo={<ManickaInfo />}
    />
    <TimelineContent
      year={'1968'}
      title={'Pražské jaro'}
      text={
        'Uvolňování politických poměrů v Československu přineslo oslabení role policejního státu i zrušení cenzury, přichází zlatá éra československého filmu a hudby. Vychází Manifest Dva tisíce slov žádající změnu poměrů.'
      }
      quiz={false}
      imgSrc={'img/jaro.jpg'}
      moreInfo={<PragueSpring />}
    />
    <TimelineContent
      year={'1968'}
      title={'Okupace'}
      text={
        'Invaze vojsk Varšavské smlouvy do Československa se uskutečnila 21. srpna 1968. Okupace byla vpádem armád pěti komunistických zemí Varšavské smlouvy podpořeným žádostí konzervativního křídla Komunistické strany Československa reagujícího na liberálně reformní vnitropolitické změny známé pod názvem Pražské jaro.'
      }
      quiz={false}
      imgSrc={'/img/okupace.jpg'}
      moreInfo={<Occupation />}
    />
    <TimelineContent
      year={'1977'}
      title={'Žena za pultem'}
      text={
        'V roce 1977 vznikl dnes již “kultovní” televizní seriál Žena za pultem, o životě a starostech obyčejné prodavačky Anny Holubové a jejích kolegů z prodejny potravin. Znázorněná samoobsluha, ale rozhodně nebyla na tehdejší poměry obyčejná, scény byly plné pultů překypujících všemi možnými potravinami a všichni zaměstnanci byli nadmíru ochotní, což se tehdejší realitě zdaleka nepřibližovalo.'
      }
      quiz={<Shopping />}
      imgSrc={'img/zena-za-pultem.png'}
      moreInfo={<ShoppingInfo />}
    />
    <TimelineContent
      year={'1980'}
      title={'Koncerty s povolením'}
      text={
        'Všechny československé kapely a hudebníci museli v 70. a 80. letech podstupovat ponižující zkoušky, aby mohly veřejně vystupovat.'
      }
      quiz={<SingleChoice />}
      imgSrc={'img/koncert.jpg'}
      moreInfo={<ConcertsInfo />}
    />
    <TimelineContent
      year={'1983'}
      title={'Céčka'}
      text={
        'Pokud bychom měli něčím charakterizovat „osmdesátky“ minulého století v Československu, tak nemůže snad být ikoničtější předmět než céčka. Plastové výlisky ve tvaru písmena „C“ byly opravdovým fenoménem především u odrostlejších dětí.'
      }
      quiz={false}
      imgSrc={'img/cecka.jpg'}
      moreInfo={<Cecka />}
    />
    <TimelineContent
      year={'1987'}
      title={'Veksláci'}
      text={
        'Muži oblečení ve značkovém oblečení ze západu postávali před pobočkami Tuzexu a snažili se zbohatnout v šedivém socialismu.'
      }
      quiz={false}
      imgSrc={'img/vekslaci.jpg'}
      moreInfo={<Vekslaci />}
    />
    <TimelineContent
      year={'1989'}
      title={'Sametová revoluce'}
      text={
        'Sametová revoluce bylo období politických změn v Československu mezi 17. listopadem a 29. prosincem 1989, které vedly k pádu komunistického režimu a přeměně politického zřízení na pluralitní demokracii a v oblasti hospodářství přechod plánované ekonomiky na tržní. Nazývá se tak proto, že ačkoliv nebylo pro převzetí moci použito násilí, výsledkem byla hluboká celospolečenská změna.'
      }
      quiz={false}
      imgSrc={'img/revoluce.jpg'}
      moreInfo={<Revolution />}
    />
  </VerticalTimeline>
);

export default Timeline;
