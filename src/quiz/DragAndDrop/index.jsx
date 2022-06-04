import React from 'react';
import './style.css';
import { useDroppable, useDraggable } from '@dnd-kit/core';

export function Droppable() {
  const { setNodeRef: setStoreRef } = useDroppable({
    id: 'store',
  });
  const { setNodeRef: setUndercounterRef } = useDroppable({
    id: 'undercounter',
  });
  const { setNodeRef: setTuzexRef } = useDroppable({
    id: 'tuzex',
  });
  const { setNodeRef: setNotAvailableRef } = useDroppable({
    id: 'notavailable',
  });

  return (
    <section className="droppable__box">
      <div className="droppable__image" ref={setStoreRef}>
        <h3>
          Zboží běžně dostupné v obvyklých prodejnách (potraviny, drogerie,
          řeznictví, apod.)
        </h3>
        <img src="/img/cart.png" alt="Nákupní košík" />
      </div>
      <div className="droppable__image" ref={setUndercounterRef}>
        <h3>
          Podpultové (nedostatkové) - zboží - dostupné sezónně, nebo sporadicky
          a často získané pouze přes známosti nebo v dlouhých frontách
        </h3>
        <img src="/img/pult.jpeg" alt="Retro prodejna" />
      </div>
      <div className="droppable__image" ref={setTuzexRef}>
        <h3>Zboží dostupné (až na výjimky) pouze v Tuzexu</h3>
        <img src="/img/tuzex.png" alt="Tuzex" />
      </div>
      <div className="droppable__image" ref={setNotAvailableRef}>
        <h3>
          Zboží, které buď (už/ještě) neexistovalo nebo se k nám vůbec
          nedováželo
        </h3>
        <img src="/img/empty-basket.jpg" alt="Prázdný košík" />
      </div>
    </section>
  );
}

// export function Draggable() {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: 'unique-id',
//   });
//   const style = transform
//     ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
//     : undefined;

//   return <ContainerItem />;
// }

export function Container(props) {
  const { id, items } = props;
  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div className="droppable__image" ref={setNodeRef}>
      {items.map((item) => (
        <ContainerItem id={item} />
      ))}
    </div>
  );
}

export function ContainerItem(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  return (
    <button ref={setNodeRef} {...listeners} {...attributes}>
      {props.id}
    </button>
  );
}
