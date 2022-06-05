import React, { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';

import { DroppableContainer } from '../DragAndDrop/DroppableContainer';
import './style.css';
import { DragItem } from '../DragAndDrop/DragItem';

export function Shopping() {
  const [items, setItems] = useState({
    root: ['banan', 'jablka'],
    available: [],
    undercounter: [],
    tuzex: [],
    unavailable: [],
  });
  console.log(items);
  const [activeId, setActiveId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const findContainerId = (dragItemId) => {
    /* console.log(items); */
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
    const initialContainer = findContainerId(activeDragItem.id);

    const overContainer = event.over;
    if (!overContainer?.id || !initialContainer) {
      setActiveId(null);
      return;
    }
    const initialContainerWithoutDragItem = items[initialContainer].filter(
      (item) => item !== activeDragItem.id,
    );
    console.log(initialContainerWithoutDragItem);
    const overContainerWithDragItem = [...items[overContainer.id]];
    overContainerWithDragItem.push(activeDragItem.id);

    setItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[initialContainer] = initialContainerWithoutDragItem;
      newItems[overContainer.id] = overContainerWithDragItem;
      return newItems;
    });
    setActiveId(null);
  }
  function evaluate() {
    const correctAnswers = {
      root: [],
      available: ['banan', 'jablka'],
      undercounter: [],
      tuzex: [],
      unavailable: [],
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
      console.log(containsAll);
      return containsAll;
    };

    if (isAllTrue()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <section className="droppable__box">
        <DroppableContainer
          id={'root'}
          title={`Zboží k rozřazení`}
          items={items.root}
        />
        <DroppableContainer
          id={'available'}
          title={`Zboží běžně dostupné v obvyklých prodejnách (potraviny, drogerie,
          řeznictví, apod.)`}
          imgSrc={'/img/cart.png'}
          imgAlt={'Nákupní košík'}
          items={items.available}
        />
        <DroppableContainer
          id={'undercounter'}
          title={`Podpultové (nedostatkové) - zboží - dostupné sezónně, nebo sporadicky
          a často získané pouze přes známosti nebo v dlouhých frontách`}
          imgSrc={'/img/pult.jpeg'}
          imgAlt={'Retro prodejna'}
          items={items.undercounter}
        />
        <DroppableContainer
          id={'tuzex'}
          title={`Zboží dostupné (až na výjimky) pouze v Tuzexu`}
          imgSrc={'/img/tuzex.png'}
          imgAlt={'Tuzex'}
          items={items.tuzex}
        />
        <DroppableContainer
          id={'unavailable'}
          title={`Zboží, které buď (už/ještě) neexistovalo nebo se k nám vůbec
          nedováželo`}
          imgSrc={'/img/empty-basket.jpg'}
          imgAlt={'Prázdný košík'}
          items={items.unavailable}
        />
      </section>
      <DragOverlay>{activeId ? <DragItem id={activeId} /> : null}</DragOverlay>
      <button onClick={evaluate}>Vyhodnotit</button>
    </DndContext>
  );
}
