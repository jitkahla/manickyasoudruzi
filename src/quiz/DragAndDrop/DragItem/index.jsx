import React from 'react';
import './style.css';
import { useDroppable, useDraggable } from '@dnd-kit/core';

export const DragItem = ({ id, getDragItemClass }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <div
      className={`${getDragItemClass(id)} drag-item`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {id}
    </div>
  );
};
