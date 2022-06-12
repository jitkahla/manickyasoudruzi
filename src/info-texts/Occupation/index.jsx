import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const Occupation = () => {
  return (
    <>
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url('img/okupace.jpg'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <MoreAbout
        title={'Okupace 1968'}
        text={
          <div className="more">
            <div className="more__paragraph">
              Hlavní podíl na invazi měly armády Sovětského svazu, výrazně
              slabší účast měla vojska Polské lidové republiky, Maďarské lidové
              republiky a Bulharské lidové republiky. Vojska Německé
              demokratické republiky sice dostala rozkaz se invaze neúčastnit,
              nicméně i tato armáda se nakonec na okupaci podílela. Zeměmi
              Varšavské smlouvy, které se invaze nezúčastnily, byly Albánie a
              Rumunská socialistická republika.
            </div>
            <div className="more__paragraph">
              Během okupace byla krátce po příjezdu tanků a obsazení letišť, na
              kterých přistávala sovětská letadla s další vojenskou technikou,
              obsazena také většina důležitých měst v ČSSR. Došlo k přerušení
              rozhlasového i televizního vysílání, které však bylo rychle
              obnoveno z improvizovaných studií. Předsednictvo ÚV KSČ v prvních
              hodinách okupace přijalo usnesení, odsuzující invazi, které
              výslovně zakázalo československým ozbrojeným složkám přímý odpor
              vůči invazním armádám, proto také tyto složky (až na výjimky)
              nepodnikly kroky k obraně vlasti. Českoslovenští vedoucí
              představitelé (Alexander Dubček, Josef Smrkovský, Oldřich Černík a
              další) byli krátce poté okupačními mocnostmi zatčeni a dočasně
              zavlečeni do ciziny.
            </div>
            <div className="more__paragraph">
              Veřejnost během prvního týdne okupace vyjadřovala podporu
              internovaným představitelům a kladla silný odpor vůči okupantům,
              čímž zabránila ustanovení dělnicko-rolnické vlády kolaborující s
              okupanty. Spontánní masové protesty trvaly týden a zdiskreditovaly
              tak socialismus sovětského typu v očích světové veřejnosti.
              Počáteční odpor k okupantům se však časem stal spíše tichým
              nesouhlasem. Proti této pasivitě veřejnosti a potlačování svobod
              se v lednu 1969 upálil student Jan Palach, následován dalšími
              odpůrci počínající normalizace. Ani další masové protesty, které
              se konaly na první výročí invaze v roce 1969, však změny
              nepřinesly, jelikož byly brutálně potlačeny československými
              pořádkovými jednotkami.
            </div>
            <div className="more__paragraph">
              Postupná „normalizace poměrů“, která přinesla mnoho represivních
              opatření jako byly čistky v komunistické straně, propouštění ze
              zaměstnání, obnovení cenzury, zrušení mnoha zájmových a
              politických sdružení a organizací pak určovala podobu celých 70.
              let („normalizace“ se občas používá i pro označení celé éry, během
              níž už „normalizační proces“ sice neprobíhal, ale normalizační
              opatření zůstávala v platnosti, tj. až do listopadu 1989).
            </div>
            <div className="more__paragraph">
              Vojska SSSR pak zůstala v Československu až do roku 1991.
            </div>
          </div>
        }
      />
    </>
  );
};
