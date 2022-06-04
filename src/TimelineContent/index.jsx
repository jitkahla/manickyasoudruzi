import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export const TimelineContent = ({ title, text, quiz, imgSrc }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'var(background-primary)',
        color: 'var(--text)',
      }}
      contentArrowStyle={{ borderRight: '7px solid  var(--red)' }}
      date="2011 - present"
      iconStyle={{
        background: 'var(--red)',
        color: '#fff',
        boxShadow: 'none',
      }}
      /*  icon={<WorkIcon />} */
    >
      <div className="timeline__box">
        <h3>{title}</h3>
        <p>{text}</p>
        {quiz ? (
          <div className="controls">
            <button>Kvíz</button>
            <button>Více...</button>
          </div>
        ) : null}
        <img src={imgSrc} />
      </div>
    </VerticalTimelineElement>
  );
};
