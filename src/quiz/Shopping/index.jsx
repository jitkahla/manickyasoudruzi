import React, { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';

import { DroppableContainer } from '../DragAndDrop/DroppableContainer';
import './style.css';
import { DragItem } from '../DragAndDrop/DragItem';

export function Shopping() {
  const [items, setItems] = useState({
    root: [
      'Chléb Šumava',
      'Toaletní papír',
      'Džíny Rifle',
      'Hrušky',
      'Banány',
      'Zubní pasta Colgate',
      'Pračka Tatramat',
      'Čokoláda Orion',
      'Pomeranče',
      'Rybí filé Nowaco',
      'Kazetový přehrávač Panasonic',
      'Špekáčky',
      'Mandarinky',
      'Deodorant Dove',
      'Coca-Cola',
      'Salám gothaj',
      'Hroznové víno',
      'Obuv Baťa',
      'Pražská šunka',
      'Ovocné sirupy (šťávy)',
      'Sójová omáčka',
      'Jogurty Danone',
      'Lednice Calex',
      'Mléko',
      'Svíčková (maso)',
      'Automobil Škoda Favorit',
      'Automobil Renault',
      'Kofola',
      'Dámské vložky',
      'Pivo Heineken',
      'Uherský salám',
      'Top&topic',
      'Kroužky na záclony',
      'Prací prášek Ariel',
      'Gin Beefeater',
      'Sýr Eidam',
      'Spodní prádlo',
      'Televizor Samsung',
      'Mýdlo Fa',
      'Jelení lůj',
      'Nábytek',
      'Pivo Bernard',
      'Cigarety Camel',
      'Lak na vlasy Taft',
      'Stavební materiál',
      'Stavebnice Lego',
      'Krém Nivea',
      'Pribináček',
      'Likér Bols',
      'Zubní pasta Elmex',
      'Dámské silonové punčochy',
      'Dekorativní kosmetika Dermacol',
      'Jízdní kolo',
      'Jar na nádobí',
      'Zahradnické náčiní',
      'Nanuk Míša',
      'Zavařovací víčka',
      'Mixér Eta',
      'Kečup',
    ],
    available: [],
    undercounter: [],
    tuzex: [],
    unavailable: [],
  });

  const [activeId, setActiveId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [displaySolution, setDisplaySolution] = useState(false);

  const [message, setMessage] = useState(null);

  const findContainerId = (dragItemId, containers) => {
    const itemsArray = Object.keys(containers);
    const initialContainer = itemsArray.find((key) =>
      containers[key].includes(dragItemId),
    );

    return initialContainer;
  };

  function handleDragStart(event) {
    const id = event.active.id;
    setActiveId(id);
  }

  function handleDragEnd(event) {
    const activeDragItem = event.active;
    const initialContainerId = findContainerId(activeDragItem.id, items);

    const overContainer = event.over;
    if (
      !overContainer?.id ||
      !initialContainerId ||
      initialContainerId === overContainer.id
    ) {
      setActiveId(null);
      return;
    }
    const initialContainerWithoutDragItem = items[initialContainerId].filter(
      (item) => item !== activeDragItem.id,
    );

    const overContainerWithDragItem = [...items[overContainer.id]];
    overContainerWithDragItem.push(activeDragItem.id);

    setItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[initialContainerId] = initialContainerWithoutDragItem;
      newItems[overContainer.id] = overContainerWithDragItem;
      return newItems;
    });
    setActiveId(null);
    setDisplaySolution(false);
    setMessage(null);
  }
  const correctAnswers = {
    root: [],
    available: [
      'Chléb Šumava',
      'Hrušky',
      'Čokoláda Orion',
      'Špekáčky',
      'Salám gothaj',
      'Ovocné sirupy (šťávy)',
      'Mléko',
      'Kofola',
      'Top&topic',
      'Sýr Eidam',
      'Jelení lůj',
      'Lak na vlasy Taft',
      'Krém Nivea',
      'Zubní pasta Elmex',
      'Dekorativní kosmetika Dermacol',
      'Jar na nádobí',
      'Nanuk Míša',
    ],
    undercounter: [
      'Toaletní papír',
      'Banány',
      'Pomeranče',
      'Mandarinky',
      'Hroznové víno',
      'Sójová omáčka',
      'Svíčková (maso)',
      'Dámské vložky',
      'Kroužky na záclony',
      'Spodní prádlo',
      'Nábytek',
      'Stavební materiál',
      'Pribináček',
      'Dámské silonové punčochy',
      'Jízdní kolo',
      'Zahradnické náčiní',
      'Zavařovací víčka',
      'Mixér Eta',
      'Kečup',
    ],
    tuzex: [
      'Zubní pasta Colgate',
      'Rybí filé Nowaco',
      'Deodorant Dove',
      'Obuv Baťa',
      'Jogurty Danone',
      'Automobil Škoda Favorit',
      'Pivo Heineken',
      'Prací prášek Ariel',
      'Televizor Samsung',
      'Pivo Bernard',
    ],
    unavailable: [
      'Džíny Rifle',
      'Pračka Tatramat',
      'Kazetový přehrávač Panasonic',
      'Coca-Cola',
      'Pražská šunka',
      'Lednice Calex',
      'Automobil Renault',
      'Uherský salám',
      'Gin Beefeater',
      'Mýdlo Fa',
      'Cigarety Camel',
      'Stavebnice Lego',
      'Likér Bols',
    ],
  };

  function evaluate() {
    setDisplaySolution(true);

    const containsAll = items.root.every((item) =>
      correctAnswers.root.indexOf(item),
    );

    const isAllTrue = () => {
      let containsAll = true;
      const containerIds = Object.keys(items);

      containerIds.forEach((id) => {
        items[id].forEach((item) => {
          containsAll = containsAll && correctAnswers[id].indexOf(item) !== -1;
        });
      });

      return containsAll;
    };

    if (isAllTrue()) {
      setMessage('Výborně. Všechno správně rozřazené.');
      setIsCorrect(true);
    } else {
      setMessage('Škoda. Zkus to příště.');
      setIsCorrect(false);
    }
  }

  const getDragItemClass = (id) => {
    if (displaySolution === false) {
      return;
    }
    return findContainerId(id, items) !== findContainerId(id, correctAnswers)
      ? 'incorrect-answer'
      : null;
  };

  return (
    <div className="quiz__box">
      <div
        className="header__img"
        style={{
          background: `top right/cover no-repeat url('img/zena-za-pultem.png'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
          backgroundBlendMode: 'lighten',
        }}
      ></div>
      <h2>Kvíz</h2>
      <h3>Žena za pultem</h3>
      <p>
        Jak tedy vypadal nákupní zážitek běžného občana v polovině 70. let?
        Rozdělte zboží do následujících kategorií podle dostupnosti.
      </p>

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <button onClick={evaluate}>Vyhodnotit</button>

        {message && <div>{message}</div>}
        <section className="droppable__box">
          <DroppableContainer
            id={'root'}
            title={`Nákupní seznam`}
            items={items.root}
            getDragItemClass={getDragItemClass}
          />

          <DroppableContainer
            id={'available'}
            title={`Zboží běžně dostupné v obvyklých prodejnách (potraviny, drogerie,
          řeznictví, apod.)`}
            imgSrc={'/img/cart.png'}
            imgAlt={'Nákupní košík'}
            items={items.available}
            getDragItemClass={getDragItemClass}
          />
          <DroppableContainer
            id={'undercounter'}
            title={`Podpultové (nedostatkové) - zboží - dostupné sezónně, nebo sporadicky
          a často získané pouze přes známosti nebo v dlouhých frontách`}
            imgSrc={'/img/pult.jpeg'}
            imgAlt={'Retro prodejna'}
            items={items.undercounter}
            getDragItemClass={getDragItemClass}
          />
          <DroppableContainer
            id={'tuzex'}
            title={`Zboží dostupné (až na výjimky) pouze v Tuzexu`}
            imgSrc={'/img/tuzex.png'}
            imgAlt={'Tuzex'}
            items={items.tuzex}
            getDragItemClass={getDragItemClass}
          />
          <DroppableContainer
            id={'unavailable'}
            title={`Zboží, které buď (už/ještě) neexistovalo nebo se k nám vůbec
          nedováželo`}
            imgSrc={'/img/empty-basket.jpg'}
            imgAlt={'Prázdný košík'}
            items={items.unavailable}
            getDragItemClass={getDragItemClass}
          />
        </section>
        <DragOverlay>
          {activeId ? (
            <DragItem id={activeId} getDragItemClass={getDragItemClass} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
