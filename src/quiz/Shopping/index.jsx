import React, { useState } from "react";
import {
  DndContext,
  DragOverlay
} from "@dnd-kit/core";

import Container from "./container";
import { Item } from "./item"

const wrapperStyle = {
  display: "flex",
  flexDirection: "row"
};

export function Shopping() {
  const [items, setItems] = useState({
    root: ["1", "2", "3"],
    container1: ["4", "5", "6"],
    container2: ["7", "8", "9"],
    container3: []
  });
  const [activeId, setActiveId] = useState();

  return (
    <div style={wrapperStyle}>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Container id="root" items={items.root} />
        <Container id="container1" items={items.container1} />
        <Container id="container2" items={items.container2} />
        <Container id="container3" items={items.container3} />
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );

  function findContainer(id) {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key) => items[key].includes(id));
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const overId = over?.id;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id);

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active?.id)
        ],
        [overContainer]: [...prev[overContainer], items[activeContainer][activeIndex]]
      };
    });

    setActiveId(null);
  }
}
