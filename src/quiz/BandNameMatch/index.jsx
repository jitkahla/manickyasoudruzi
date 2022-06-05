import React, { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';

import { DroppableContainer } from '../DragAndDrop/DroppableContainer';
import { DragItem } from '../DragAndDrop/DragItem';

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
      setMessage('Výborně. Všechno správně přiřazené.');
      setIsCorrect(true);
    } else {
      setMessage('Škoda. Zkus to příště.');
      setIsCorrect(false);
    }
  }
  console.log(message);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <p>
        Zatímco v šedesátých letech mohly kapely, které hrály převzatý
        repertoár, zpívat v originále, v době normalizace musely svoje texty
        překládat do češtiny a často se měnily i názvy skupin.
      </p>
      <p>
        Poznáš, jak se kapely přejmenovaly, aby mohly vystupovat? Vyber původní
        anglický název a k němu změněný český:
      </p>

      <section className="droppable__box">
        <DroppableContainer
          id={'root'}
          title={`Názvy kapel v češtině`}
          items={items.root}
        />
        <DroppableContainer
          id={'taxmeni'}
          title={`Taxmeni`}
          items={items.taxmeni}
        />
        <DroppableContainer
          id={'bgHoppers'}
          title={`Bluesgrass Hoppers`}
          items={items.bgHoppers}
        />
        <DroppableContainer
          id={'greenhorns'}
          title={`Greenhorns`}
          items={items.greenhorns}
        />
        <DroppableContainer
          id={'rangers'}
          title={`Rangers`}
          items={items.rangers}
        />
        <DroppableContainer
          id={'blueEffect'}
          title={`Blue Effect`}
          items={items.blueEffect}
        />
        <DroppableContainer
          id={'flamingo'}
          title={`Flamingo`}
          items={items.flamingo}
        />
        <DroppableContainer
          id={'toronto'}
          title={`Toronto`}
          items={items.toronto}
        />
      </section>
      <DragOverlay>{activeId ? <DragItem id={activeId} /> : null}</DragOverlay>
      <button onClick={evaluate}>Vyhodnotit</button>
      {message && <div>{message}</div>}
    </DndContext>
  );
};
