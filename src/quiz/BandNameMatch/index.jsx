import React, { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import './style.css';
import { DroppableContainer } from '../DragAndDrop/DroppableContainer';
import { DragItem } from '../DragAndDrop/DragItem';
import { Solution } from '../../info-texts/MoreAbout';
import { West } from '../../info-texts/West';

export const BandNameMatch = () => {
  const [items, setItems] = useState({
    root: [
      'Zelenáči',
      'Krajánci',
      'Fešáci',
      'Brontosauři',
      'M Efekt',
      'Plavci',
      'Plameňáci',
    ],
    taxmeni: [],
    bgHoppers: [],
    greenhorns: [],
    rangers: [],
    blueEffect: [],
    flamingo: [],
    toronto: [],
  });

  const [activeId, setActiveId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const [message, setMessage] = useState(null);

  const findContainerId = (dragItemId) => {
    const itemsArray = Object.keys(items);
    const initialContainer = itemsArray.find((key) =>
      items[key].includes(dragItemId),
    );

    return initialContainer;
  };

  function handleDragStart(event) {
    const id = event.active.id;
    setActiveId(id);
  }

  function handleDragEnd(event) {
    const activeDragItem = event.active;
    const initialContainerId = findContainerId(activeDragItem.id);

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
  }
  function evaluate() {
    const correctAnswers = {
      root: [],
      taxmeni: ['Krajánci'],
      bgHoppers: ['Fešáci'],
      greenhorns: ['Zelenáči'],
      rangers: ['Plavci'],
      blueEffect: ['M Efekt'],
      flamingo: ['Plameňáci'],
      toronto: ['Brontosauři'],
    };
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
      setMessage(
        'Skvělá práce, jen tak dál soudruhu. Jdeš příkladem nám všem.',
      );
      setIsCorrect(true);
    } else {
      setMessage(
        'Ale soudruhu, toto se ti nepodařilo. Pokud máme splnit pětiletku, budeš se muset více snažit.',
      );
      setIsCorrect(false);
    }
  }
  console.log(message);

  return (
    <>
      <div className="quiz__box">
        <div
          className="header__img"
          style={{
            background: `top right/cover no-repeat url('img/pop-normalizace.jpg'), linear-gradient(to left, transparent, 80%, var(--background)), linear-gradient(to bottom, transparent, 80%, var(--background))`,
            backgroundBlendMode: 'lighten',
          }}
        ></div>
        <h2>Kvíz</h2>
        <h3>Nevhodné názvy kapel</h3>

        <p>
          Zatímco v šedesátých letech mohly kapely, které hrály převzatý
          repertoár, zpívat v originále, v době normalizace musely svoje texty
          překládat do češtiny a často se měnily i názvy skupin.
        </p>
        <p>
          Poznáš, jak se kapely přejmenovaly, aby mohly vystupovat? Přesuň český
          název k původnímu anglickému:
        </p>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <section className="band__container droppable__box">
            <div className="band__root">
              <DroppableContainer
                id={'root'}
                title={`Názvy kapel česky`}
                items={items.root}
              />
            </div>
            <div className="band__names">
              <DroppableContainer
                id={'taxmeni'}
                title={`Taxmeni`}
                imgSrc={'img/taxmeni.jpg'}
                items={items.taxmeni}
              />
              <DroppableContainer
                id={'bgHoppers'}
                title={`Bluesgrass Hoppers`}
                imgSrc={'img/bghoppers.jpg'}
                items={items.bgHoppers}
              />
              <DroppableContainer
                id={'greenhorns'}
                title={`Greenhorns`}
                imgSrc={'img/greenhorns.jpg'}
                items={items.greenhorns}
              />
              <DroppableContainer
                id={'rangers'}
                title={`Rangers`}
                imgSrc={'img/rangers.jpg'}
                items={items.rangers}
              />
              <DroppableContainer
                id={'blueEffect'}
                title={`Blue Effect`}
                imgSrc={'img/beffekt.jpg'}
                items={items.blueEffect}
              />
              <DroppableContainer
                id={'flamingo'}
                title={`Flamingo`}
                imgSrc={'img/flamingo.jpg'}
                items={items.flamingo}
              />
              <DroppableContainer
                id={'toronto'}
                title={`Toronto`}
                imgSrc={'img/toronto.jpg'}
                items={items.toronto}
              />
            </div>
          </section>
          <DragOverlay>
            {activeId ? <DragItem id={activeId} /> : null}
          </DragOverlay>
          <button className="box__button" onClick={evaluate}>
            Vyhodnotit
          </button>
          {message && <div>{message}</div>}
        </DndContext>
      </div>
      <Solution content={<West />} />
    </>
  );
};
