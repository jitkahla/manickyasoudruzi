import React from "react";
import { useDroppable } from "@dnd-kit/core";

import { Item } from "./item";

const containerStyle = {
  background: "#dadada",
  padding: 100,
  margin: 50,
  flex: 1,

};

export default function Container(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div
      id={id}
      items={items}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((id) => (
          <Item key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
