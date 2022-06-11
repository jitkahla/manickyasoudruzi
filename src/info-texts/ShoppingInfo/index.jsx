import React from 'react';
import { MoreAbout } from '../MoreAbout';

export const ShoppingInfo = () => {
  return (
    <MoreAbout
      title={'Nakupování za socialismu'}
      text={
        <div className="more">
          <div className="more__paragraph">
            Charakter plánovaného hospodářství v kombinaci s limitovaným
            zahraničním obchodem a nedokonalým zásobováním určovaly podobu těch
            skutečných pultů v obchodech - ty nejenže většinou neodpovídaly
            poptávce, ale nelze hovořit ani o dostatku. Zatímco základní
            potraviny a zboží nižší kvality byly vcelku běžně dostupné, chtěl-li
            někdo kvalitní maso, kosmetiku, elektroniku či exotické ovoce (v
            období Vánoc), musel si buď vystát pořádnou frontu,vyčkat v
            pořadníku, nebo mít v dané prodejně známého, které mu zboží “schoval
            pod pultem”. Nedostatkové zboží je tedy pojmem, který k období
            komunismu v Československu neodmyslitelně patří.
          </div>
          <div className="more__paragraph">
            Zvláštní kategorií pak bylo zboží dovážené, které se dalo sehnat
            pouze v Tuzexu (síti obchodů, ve kterých se za valuty zahraničních
            měn nebo tuzexové poukázky (tzv. bony) mohlo koupit zahraniční
            (zejména západní) zboží, případně zboží určené pouze k exportu,
            které nebylo v normální síti prodejen k dispozici; název Tuzex bylo
            zkratkové slovo utvořené ze slov tuzemský export). Existovaly ale i
            výjimky, některé zboží západních značek se smělo pod licencí vyrábět
            i v Československu, jedná se např. o kosmetiku značky Nivea, zubní
            pasty Elmex či limonády Coca-Cola. Nutno dodat, že toto zboží bylo
            obvykle méně dostupné a podstatně dražší než tuzemské výrobky.
          </div>
        </div>
      }
      source={
        <ul>
          <li>
            Speciál ČT Toto 100letí:{' '}
            <a href="https://www.ceskatelevize.cz/specialy/totostoleti#/detail/v-5-29 ">
              Podpultový prodej
            </a>
          </li>
          <li>
            PETROV, Michal. Retro ČS. Brno: Jota, 2013. ISBN 978-80-7462-422-3.
          </li>
          <li>
            ŠŤASTNÁ, Renáta a Zuzka KUČEROVÁ. Vzpomínkomat. Brno: BizBooks,
            2017. ISBN 978-80-265-0695-9.
          </li>
          <li>
            A samozřejmě samotný seriál Žena za pultem, doporučujeme shlédnout
            alespoň jednu epizodu, seriál je nabitý tehdejšími hereckými
            hvězdami a je to pořádný bizár…
          </li>
        </ul>
      }
    />
  );
};
