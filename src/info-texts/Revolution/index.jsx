import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const Revolution = () => {
  return (
    <>
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url('img/revoluce.jpg'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <MoreAbout
        title={'Sametová revoluce'}
        text={
          <div className="more">
            <div className="more__paragraph">
              K podstatnému urychlení změn v Československu přispěl rozpad
              bývalého Východního bloku, ovládaného Sovětským svazem, a
              narůstající nespokojenost velké většiny obyvatelstva s ekonomickou
              a politickou situací v zemi. V Polsku v roce 1980 nespokojenost
              vyústila v masové protesty v gdaňských loděnicích, které měly za
              následek vznik nezávislých odborů Solidarita, jehož členy bylo v
              roce 1981 okolo 10 milionů Poláků. V roce 1989 došlo po dalších
              nátlacích a protestech proti vládě k legalizaci Solidarity a k
              částečným svobodným volbám, které drtivě vyhráli nekomunističtí
              zástupci, čímž se odstartoval dominový efekt pádů komunistických
              režimů ve střední Evropě. Po pádu komunismu v Polsku následovaly
              další pády komunistických režimů v Maďarsku, Rumunsku a ve
              Východním Německu.
            </div>
            <div className="more__paragraph">
              K pádu železné opony přispěl i nástup Michaila Gorbačova do čela
              Sovětského svazu v roce 1985, který, inspirován i Pražským jarem
              1968, zahájil dalekosáhlé politické a ekonomické reformy, které se
              označovaly hesly perestrojka (přestavba) a glasnosť (otevřenost).
              Gorbačov usiloval o zlepšení vztahů se Západem a přestal zasahovat
              do politiky východoevropských satelitů.] Během událostí listopadu
              a prosince 1989 dostali sovětští vojáci v Československu od
              Gorbačova příkaz zůstat v kasárnách a do dění v Československu
              nijak nezasahovat.
            </div>
            <div className="more__paragraph">
              Samotné revoluci předcházelo několik událostí, které předznamenaly
              změny ve společnosti. Již v lednu 1989 bylo Veřejnou bezpečností
              rozehnáno nepovolené shromáždění k uctění památky Jana Palacha:
              následovala vlna protestních akcí, tzv. Palachův týden. Petice
              Několik vět, zveřejněná 29. června 1989, vyjadřovala nespokojenost
              občanů s komunistickým režimem. Do listopadu ji podepsalo na 40
              tisíc lidí. 17. listopadu 1989 se konal povolený pietní pochod
              studentů pražských vysokých škol k uctění památky Jana Opletala:
              neskončil přitom na Vyšehradě, jak bylo státními orgány schváleno,
              ale studenti se přesunuli do centra města. Na Národní třídě se
              poté odehrál brutální zásah bezpečnostních složek: ten se stal
              symbolem počátku sametové revoluce.
            </div>
            <div className="more__paragraph">
              Proti policejnímu zásahu se již o dva dny později konaly v Praze
              masové demonstrace, v úterý 21. listopadu se na Václavském náměstí
              sešlo až 200 000 lidí. Symbolem protestů se stalo cinkání klíči a
              volání hesel jako “Máme holé ruce!” nebo “Kdy, když ne teď? Kdo,
              když ne my?”. Z balkonu paláce Melantrich k protestujícím poprvé
              promluvil Václav Havel.
            </div>
            <div className="more__paragraph">
              Postupně se až do 27. listopadu demonstrovalo i v dalších městech.
              Vrcholem manifestací byla 25. listopadu více než půlmilionová
              demonstrace na pražské Letné. K demonstracím studentů se postupně
              připojily všechny vrstvy obyvatelstva s požadavkem politických
              reforem. Hranice na Západ se otevřely 4. prosince a prezident
              Gustáv Husák podal demisi 10. prosince. Václav Havel byl 29.
              prosince zvolen prezidentem Československa.
            </div>
          </div>
        }
        source={
          <ul>
            <li>
              Speciál ČT Toto 100letí:{' '}
              <a href="https://www.ceskatelevize.cz/specialy/totostoleti#/detail/v-5-36">
                Demonstrace 17. listopadu 1989
              </a>
            </li>
          </ul>
        }
      />
    </>
  );
};
