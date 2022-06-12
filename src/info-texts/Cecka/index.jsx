import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const Cecka = () => {
  return (
    <>
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url('img/cecka.jpg'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <MoreAbout
        title={'Céčka'}
        text={
          <div className="more">
            <div className="more__paragraph">
              Nejde o nic jiného než o barevné plastové výlisky ve tvaru písmena
              „C“, které původně firma Kovozávody Semily vyráběla jako součásti
              závěsů do oken a dveří. Díky rostoucí poptávce rostla i nabídka
              různých barev, ale dokonce i tvarů a dalších písmen abecedy. Na
              vrcholu popularity byly především paragrafy, anebo písmena v
              netradičních barvách jako perleťová nebo zlatá.
            </div>
            <div className="more__paragraph">
              Kdo přesto neměl možnost si céčka pořídit, protože byly často
              vyprodány, nebo je neměl za co vyměnit, nemusel věšet hlavu. Pokud
              mu nestačil krátký náramek a zatoužil třeba pro řetězu, který
              držel klíče na krku, tak si mohl svou sbírku rozšířit ve hře zvané
              čára. Jejím cílem bylo hodit své „céčko“ co nejblíže vyznačené
              čáře. Nebylo snad školní přestávky nebo cesty ze školy, aby nebyla
              k vidění nějaká partička, která hrála právě čáru.
            </div>
          </div>
        }
        source={
          <ul>
            <li>
              YouTube video:{' '}
              <a href="https://www.youtube.com/watch?v=sRaQV_tE33I">
                Vzpomínka na sběratelskou mánii: Kdo z vás měl doma céčka?
              </a>
            </li>
          </ul>
        }
      />
    </>
  );
};
