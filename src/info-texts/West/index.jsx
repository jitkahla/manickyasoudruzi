import React from 'react';
import { MoreAbout } from '../../info-texts/MoreAbout';

export const West = () => {
  return (
    <MoreAbout
      title={'Normalizace a populární hudba'}
      text={
        <div className="more">
          <div className="more__paragraph">
            <p>Správné řešení: </p>

            <p>Kapela Toronto se přejmenovala na Brontosaury.</p>
            <p>Z Flaminga se staly Plameňáci.</p>
            <p>Blue Effect změnil jméno na M Efekt.</p>
            <p>Rangers začali vystupovat jako Plavci.</p>
            <p>Greenhorns se přejmenovali na Zelenáče.</p>
            <p>Taxmeni zvolili název Krajánci.</p>
            <p>A Bluesgrass hoppers zase Fešáci.</p>
          </div>
          <div className="more__paragraph">
            Režim ve snaze si získat mladou generaci plně kontroloval a využíval
            populární hudbu. Všechny texty písní musely projít schválením
            censora. Závadný text nebo jeho část musel být upraven. Bylo
            stanoveno povinné procento sovětských písní, které muselo být v
            rozhlase odvysíláno.
          </div>
          <div className="more__paragraph">
            Ti zpěváci, kteří byli povoleni, museli svou loajalitu k režimu čas
            od času projevovat veřejně účastí na festivalech politické písně.
            Plusové body přinášelo také veřejné vyjádření k politickým
            událostem, např. odsouzení Charty 77 (tzv. Anticharta).
          </div>
          <div className="more__paragraph">
            Režim pořádal gigantické hudební festivaly jako "Zlatý palcát"
            (vojenská tématika), "Děčínskou kotvu" nebo "Bratislavskou lyru". Na
            druhou stranu byl v pozdějších letech nucen trpět některé
            neoficiální setkání interpretů zvláště country hudby. Velké množství
            skladeb a interpretů bylo šířeno neoficiálně pomocí magnetofonových
            nahrávek nebo zahraničním rozhlasem.
          </div>
          <div className="more__paragraph">
            Cestou, jak vytvářet hity i v socialistickém Československu, byly
            cover verze. Využila se hudba, vytvořil se nový český text a hit byl
            na světě. V materiálu ideologické komise ÚV KSČ z dubna 1983 se
            dočtete: „Primitivní texty a jednotvárná melodie nenutí mládež na
            Západě myslet na každodenní život. Odvádí je od třídního boje, od
            politiky(…) A toto umění se snaží propašovat k nám prostřednictvím
            různých kanálů.“ Vybudovat kulturu odstřiženou od ,dekadentní‘
            kultury Západu se ale nakonec ukázalo jako nereálné.“
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            Rozhlas.cz:{' '}
            <a href="https://plus.rozhlas.cz/zpevaci-za-socialismu-sice-radi-prejimali-pisne-ze-zahranici-nebyla-ale-cista-8601220">
              Zpěváci za socialismu sice rádi přejímali písně ze zahraničí,
              nebyla to ale čistá kopie západního showbyznysu, myslí si historik
            </a>
          </li>
          <li>
            Totalita.cz:{' '}
            <a href="https://www.totalita.cz/norm/norm_kult_th.php">
              Období normalizace: kultura zaživa pohřbená - hudební tvorba
            </a>
          </li>
        </ul>
      }
    />
  );
};
