import React from 'react';
import './style.css';
import { MoreAbout } from '../MoreAbout';

export const MapInfo = () => {
  return (
    <MoreAbout
      title={'Dovolená za socialismu'}
      text={
        <div className="more">
          <div className="more__paragraph">
            Cestovatelský semafor mezi lety 1948 - 1989 vypadal zhruba
            následovně:
          </div>
          <div className="more__image">
            <img
              src="/img/mapa-semafor.svg"
              alt="Cestovatelský semafor za socialismu"
            />
          </div>
          <div className="more__paragraph">
            <div className="more__lights">
              <div className="light__item">
                <span className="icon__light"> </span>
                <p>
                  Země Západu, kam se běžně vycestovat nedalo - vycestovat šlo
                  převážně s cestovní kanceláří a povolení k výjezdu dostali
                  opravdu jen ti vyvolení.
                </p>
              </div>
              <div className="light__item">
                <span className="icon__light icon__light--orange"> </span>
                <p>
                  Země socialistického bloku, kde byla samozřejmě nutná výjezdní
                  doložka, ale i další potvrzení (např. vízum, zvací dopis) a
                  výjezd podléhal určitým restrikcím. Jednalo se o Albánii,
                  Jugoslávii, Polsko a SSSR.
                </p>
              </div>
              <div className="light__item">
                <span className="icon__light icon__light--green"> </span>
                <p>
                  Země bezvízového styku, pokud občan získal pas, měl v něm tzv.
                  trvalou výjezdní doložku platnou pro tyto státy - Bulharsko,
                  Maďarsko, NDR, Rumunsko.
                </p>
              </div>
            </div>
          </div>
          <div className="more__paragraph">
            Cestování do zahraničí bylo především podmíněno vlastnictvím
            cestovního pasu, což bylo samo o sobě komplikované a pro některé
            občany přímo nedosažitelné - například pro kritiky režimu nebo ty co
            měli rodinné příslušníky emigranty v zahraničí. Pokud už člověk měl
            štěstí že platný pas vlastnil, musel ovšem absolvovat byrokratické
            kolečko k získání dalších povolení - výjezdní doložky a případně
            devizového příslibu, kde naděje na jejich obdržení byla často na
            úrovni výhry ve sportce.
          </div>
          <div className="more__paragraph">
            Výjezdní doložka byl v podstatě způsob, jakým kontrolovat
            vycestování nepohodlných osob za hranice i přesto, že měly platný
            cestovní pas. Žádost musela být schválena celou řadou různých osob,
            počínaje výborem komunistické strany na pracovišti, ředitelem školy,
            uličním výborem KSČ apod. Devizový příslib pak bylo písemné povolení
            čerpat devizové prostředky zahraničních měn nutné k výjezdu do
            nesocialistických zemí (včetně Jugoslávie). Výměnu peněz povolovala
            Státní banka československá a průměrná čekací doba pro nestraníka
            byla v období normalizace i několik let, ročně se totiž dočkala
            pouhá 4% žadatelů. Problémem také bylo, že banka dovolovala vyměnit
            si jen velmi omezené množství cizí měny, takže lidé si často další
            cizí měnu před cestou nakupovali u tzv. veksláků a pak trnuli, aby
            tyto peníze u nich nebyly na hraničním přechodu z Československa při
            prohlídce objeveny (držení deviz bylo totiž nelegální).
          </div>
          <div className="more__paragraph">
            Většina občanů Československa se tak spokojila s výlety po zdejší
            krajině a vyjet k moři do Bulharska, či k Balatonu do Maďarska byl
            velký svátek. Nejvíce českých turistů využívalo služeb cestovních
            kanceláří na výjezd do NDR či po nelehké organizaci do Sovětského
            svazu. Luxus socialistického východu našli turisté na Krymu v Soči a
            exotiku třeba na Kubě, to už se ale podařilo opravdu jen
            prominentům. Jugoslávie byla vysněnou destinací, do které však
            nebylo vůbec snadné se vydat. Titův socialistický režim na Sovětském
            svazu relativně nezávislý a fungoval o něco svobodněji, emigranti
            tedy nejčastěji volili tuto zemi jako cestu ke svobodě, a o to
            složitější bylo získat výjezdní doložku právě do této destinace.
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            PETROV, Michal. Retro ČS. Brno: Jota, 2017. ISBN 978-80-7565-187-7
          </li>
        </ul>
      }
    />
  );
};
