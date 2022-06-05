import React from 'react';
import './style.css';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineContent } from '../TimelineContent';
import { Comrads } from '../quiz/Comrads';
import { Map } from '../quiz/Map';
import { Manicka } from '../quiz/Manicka';
import { SingleChoice } from '../quiz/SingleChoice/SingleChoice';

const Timeline = () => (
  <VerticalTimeline lineColor={'#000000'} layout={'2-columns'}>
    <TimelineContent
      title={'Komunisté se ujali moci'}
      text={
        'Zvláštností komunistického převratu v Československu, ve srovnání s obdobnými procesy v jiných státech východní Evropy, byla skutečnost, že proběhl za podpory velké části obyvatelstva.'
      }
      quiz={false}
      imgSrc={'/img/unor48.jpg'}
    />
    <TimelineContent
      title={'Soudruzi na věčné časy?'}
      text={
        'Nástup komunismu v Československu s sebou z dnešního pohledu přinesl i rozdělení společnosti na komunistické soudruhy a třídní nepřátele. Komunističtí soudruzi se pak ihned začali zbavovat svých třídních nepřátel, tedy lidí s odlišným politickým viděním světa, buržoazie, inteligence… Zdálo by se, že tedy být na té “správné” straně je vcelku jednoduchá záležitost a stačí k tomu stranická knížka KSČ a zápal pro věc. Obludnost komunistického totalitního režimu ale spočívala v tom, že na druhé straně barikády se mohl ocitnout najednou i ten, který likvidační mašinerii oponentů sám pomáhal budovat.'
      }
      quiz={<Comrads />}
      imgSrc={'/img/slansky.jpg'}
    />
    <TimelineContent
      title={'Cestování za socialismu'}
      text={
        'Otevřené hranice, takřka neomezené možnosti výběru destinace a minimální administrativa spojená s výjezdem do zahraničí jsou pro nás v podstatě samozřejmostí. Z tohoto pohodlí nás možná nakrátko vytrhly různé covidové semafory a lockdowny, ale starší generace si podobný “semafor” pamatují z celého období komunismu. Vyjet ven bylo zkrátka privilegium, kterého se nedostávalo všem.'
      }
      quiz={<Map />}
      imgSrc={'/img/cestovani.jpg'}
    />
    <TimelineContent
      title={'Máničky'}
      text={
        'Režim líčil dlouhovlasé muže jako špinavé hašišáky. Lidé byli odváženi na služebnu a násilím stříháni. Příslušníci Veřejné bezpečnosti rozháněli koncerty a brutálně zakročovali proti těm, kteří si přišli jen poslechnout hudbu.'
      }
      quiz={<Manicka />}
      imgSrc={'img/manicky.jpg'}
    />
    <TimelineContent
      title={'Pražské jaro'}
      text={
        'Uvolňování politických poměrů v Československu přineslo oslabení role policejního státu i zrušení cenzury, přichází zlatá éra československého filmu a hudby. Vychází Manifest Dva tisíce slov žádající změnu poměrů.'
      }
      quiz={false}
      imgSrc={'img/jaro.jpg'}
    />
    <TimelineContent
      title={'Koncerty s povolením'}
      text={
        'Všechny československé kapely a hudebníci museli v 70. a 80. letech podstupovat ponižující zkoušky, aby mohly veřejně vystupovat.'
      }
      quiz={<SingleChoice />}
      imgSrc={'img/koncert.jpg'}
    />
    <TimelineContent
      title={'Žena za pultem'}
      text={
        'V roce 1977 vznikl dnes již “kultovní” televizní seriál Žena za pultem, o životě a starostech obyčejné prodavačky Anny Holubové a jejích kolegů z prodejny potravin. Znázorněná samoobsluha, ale rozhodně nebyla na tehdejší poměry obyčejná, scény byly plné pultů překypujících všemi možnými potravinami a všichni zaměstnanci byli nadmíru ochotní, což se tehdejší realitě zdaleka nepřibližovalo.'
      }
      quiz={true}
      imgSrc={'img/zena-za-pultem.png'}
    />
    <TimelineContent
      title={'Céčka'}
      text={
        'Pokud bychom měli něčím charakterizovat „osmdesátky“ minulého století v Československu, tak nemůže snad být ikoničtější předmět než céčka. Plastové výlisky ve tvaru písmena „C“ byly opravdovým fenoménem především u odrostlejších dětí.'
      }
      quiz={false}
      imgSrc={'img/cecka.jpg'}
    />
    <TimelineContent
      title={'Veksláci'}
      text={
        'Muži oblečení ve značkovém oblečení ze západu postávali před pobočkami Tuzexu a snažili se zbohatnout v šedivém socialismu.'
      }
      quiz={false}
      imgSrc={'img/vekslaci.jpg'}
    />
  </VerticalTimeline>
);

export default Timeline;
