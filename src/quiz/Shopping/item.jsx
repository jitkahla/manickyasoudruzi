import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Item(props) {
  const { id } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
  } = useDraggable({ id });

  const style = {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    margin: "10px 0",
    background: "white"
  };

  return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{id}</div>;
}
