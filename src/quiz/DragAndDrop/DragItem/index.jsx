import React from 'react';
import './style.css';
import { useDroppable, useDraggable } from '@dnd-kit/core';

export const DragItem = ({ id }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <div className="drag-item" ref={setNodeRef} {...attributes} {...listeners}>
      {id}
    </div>
  );
};
