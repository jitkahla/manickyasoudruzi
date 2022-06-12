import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const PragueSpring = () => {
  return (
    <>
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url('img/jaro.jpg'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <MoreAbout
        title={'Pražské jaro'}
        text={
          <div className="more">
            <div className="more__paragraph">
              V Československu vedly rostoucí hospodářské obtíže, odkrývání
              pravdy o politických procesech v 50. letech a všeobecná kritika
              oficiální politiky k postupnému uvolňování poměrů v zemi.
              Stupňovaly se požadavky na svobodu slova a názoru, na svobodu
              informací a uměleckého projevu i vlastního náboženského
              přesvědčení.
            </div>
            <div className="more__paragraph">
              Pražským jarem rozumíme období od 5. ledna 1968, kdy čelné pozice
              ve vedení KSČ zaujali příznivci ekonomických a společenských
              reforem v čele s generálním tajemníkem ÚV KSČ Alexandrem Dubčekem.
              Velkou roli sehrály sdělovací prostředky, které díky slábnoucímu
              vlivu cenzury již od ledna informovaly veřejnost objektivněji o
              probíhajících změnách. Díky nim se také dostal do povědomí
              společnosti termín „socialismus s lidskou tváří“. Novým
              prezidentem se stal Ludvík Svoboda, byla jmenována nová vláda v
              čele s Oldřichem Černíkem. V dubnu byl na plénu ÚV KSČ přijat
              proreformní „Akční program KSČ“.
            </div>
          </div>
        }
        source={
          <ul>
            <li>
              My jsme to nevzdali:{' '}
              <a href="https://www.myjsmetonevzdali.cz/temata/prazske-jaro-a-okupace/prazske-jaro/">
                Pražské jaro
              </a>
            </li>
            <li>
              Paměť národa{' '}
              <a href="https://www.pametnaroda.cz/cs/prazske-jaro-2">
                Pražské jaro
              </a>
            </li>
          </ul>
        }
      />
    </>
  );
};
