import React from 'react';
import './style.css';
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
      iconStyle={{
        background: 'var(--red)',
        color: '#fff',
        boxShadow: 'none',
      }}
      icon={<span>1948</span>}
      iconClassName="timeline__icon"
    >
      <div className="timeline__box">
<<<<<<< HEAD
        <div>
=======
        <div className="box__text">
>>>>>>> 963484e2afd532a22138f6264d9b91ea62bad2bd
          <h3>{title}</h3>
          <p>{text}</p>
          {quiz ? (
            <div className="controls">
              <button>Kvíz</button>
              <button>Více...</button>
            </div>
          ) : null}
        </div>
        <img src={imgSrc} />
      </div>
    </VerticalTimelineElement>
  );
};
