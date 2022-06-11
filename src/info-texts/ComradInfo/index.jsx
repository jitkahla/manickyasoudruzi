import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const ComradInfo = () => {
  return (
    <MoreAbout
      title="Politický monstrproces s Rudolfem Slánským"
      text={
        <div>
          <div className="more__paragraph">
            Proces s Rudolfem Slánským a dalšími vrcholnými představiteli
            stranického a státního aparátu byl jedním z vykonstruovaných procesů
            (tzv. monstrprocesů) probíhajících v rámci komunistického bloku 50.
            let. Proces s tzv. protistátním spikleneckým centrem v čele s
            Rudolfem Slánským byl dlouhodobě a důkladně připravován
            československými bezpečnostními, stranickými a justičními orgány a
            měl několik cílů. Proces byl především zkonstruován na výstrahu a
            varování všem komunistickým státům proti odchylkám od sovětské
            politiky. V důsledku jugoslávsko-sovětské roztržky (Jugoslávie pod
            vedením Josip Broze Tita vystupovala v zahraniční politice nezávisle
            na Moskvě a narušovala tak sovětskou hegemonii ve Východním bloku)
            přišel J. V. Stalin s teorií nepřítele uvnitř strany a mezinárodním
            protisovětským spiknutím.
          </div>
          <div className="more__paragraph">
            Dalším důležitým aspektem byl antisemitský podtext procesu, jedenáct
            ze čtrnácti obžalovaných bylo označeno jako osoby židovského původu.
            To souviselo s politikou na Blízkém Východě, kde se SSSR snažil
            přechýlit na svou stranu Izrael, ten ovšem v průběhu první
            arabsko-izraelské války zaujal proamerický postoj, a proto se SSSR
            následně zaměřil na podporu některých arabských režimů. Když
            Sovětský svaz ztratil možnost ovlivnit politiku Izraele a zaujal
            proarabské stanovisko, byla zároveň zahájena i antisemitská
            propagandistická kampaň. Tento postoj také později ovlivnil výběr
            obžalovaných v procesu se Slánským, který byl jedním z podporovatelů
            československé pomoci vznikajícímu státu Izrael.
          </div>
          <div className="more__paragraph">
            Ve dnech 20.– 27. listopadu 1952 tak po zdlouhavém vyšetřování,
            během nějž byli obvinění podrobování krutému fyzickému a psychickému
            násilí, probíhalo před Státním soudem v Praze veřejné soudní
            přelíčení, během kterého zaznívaly z úst obžalovaných naučené a
            vynucené odpovědi přesně podle detailně připraveného scénáře. Senát
            za předsednictví JUDr. Jaroslava Nováka uznal všechny obžalované
            vinnými. Rudolf Slánský, Bedřich Geminder, Ludvík Frejka, Josef
            Frank, Vladimír Clementis, Bedřich Reicin, Karel Šváb, Rudolf
            Margolius, Otto Fischl, Otto Šling a André Simon byli odsouzeni k
            trestu smrti oběšením; Artur London, Vavro Hajdů a Evžen Löbl byli
            odsouzeni k trestu doživotního vězení. Za účelem náležitého
            propagandistického využití procesu byl pořízen zvukový a filmový
            záznam. Vybrané části zvukového záznamu průběžně vysílal
            Československý rozhlas.
          </div>
          <div className="more__paragraph">
            Rudolf Slánský, důsledný organizátor KSČ a nemilosrdný likvidátor
            opozice v Československu po roce 1945 a 1948, který spolu s
            Klementem Gottwaldem pozval do Československa sovětské poradce, jimž
            dali autoritu nad inscenovanými politickými procesy, se tak nakonec
            sám stal jejich obětí.
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            Paměť národa:{' '}
            <a href="https://www.pametnaroda.cz/cs/drofa-jiri-1941?clipId=51936#recording">
              Jak vnímalo výsledek procesu dítě ve škole?
            </a>
          </li>
          <li>
            Národní Archiv:{' '}
            <a href=" https://old2.nacr.cz/fondy-a-pomucky/proces-slansky/">
              Proces slánský (shrnutí a celý záznam procesu)
            </a>
          </li>
          <li>
            Dokument Martina Vadase:{' '}
            <a href="https://www.ceskatelevize.cz/porady/12505569593-kdo-jinemu-jamu-rudolf-slansky/">
              <em>KDO JINÉMU JÁMU Rudolf Slánský</em>
            </a>
          </li>
        </ul>
      }
    />
  );
};
