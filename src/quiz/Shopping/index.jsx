import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable, Container } from '../DragAndDrop';

export function Shopping() {
  const [isDropped, setIsDropped] = useState(false);

  const [items, setItems] = useState({
    root: ['banan', 'jablka'],
    container1: [],
    container2: [],
    container3: [],
    container4: [],
  });

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {/* {!isDropped ? draggableMarkup : null} */}
      {/* <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable> */}
      <Container id="root" items={items.root} />
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  function handleDragStart(event) {
    console.log('handleDragStart started');
  }
}
