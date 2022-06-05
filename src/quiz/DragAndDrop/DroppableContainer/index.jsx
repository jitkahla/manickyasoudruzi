import React from 'react';
import './style.css';
import { useDroppable } from '@dnd-kit/core';
import { DragItem } from '../DragItem';

export const DroppableContainer = ({ id, items, title, imgSrc, imgAlt }) => {
  const { setNodeRef } = useDroppable({ id });
  /* console.log(items); */
  return (
    <div className="droppable__image" ref={setNodeRef}>
      <h3>{title}</h3>
      <img src={imgSrc} alt={imgAlt} />
      {items.map((item) => (
        <DragItem key={item} id={item} />
      ))}
    </div>
  );
};
