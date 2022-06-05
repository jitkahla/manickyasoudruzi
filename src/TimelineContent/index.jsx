import React from 'react';
import './style.css';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

export const TimelineContent = ({ title, text, quiz, imgSrc }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'var(--background)',
        color: 'var(--text)',
      }}
      contentArrowStyle={{ borderRight: '7px solid  var(--red)' }}
      iconStyle={{
        background: 'var(--red)',
        color: '#fff',
        boxShadow: 'none',
      }}
      icon={<span className="icon__text">1948</span>}
    >
      <div className="timeline__box">
        <img class="box__image" src={imgSrc} />
        <div className="box__text">
          <h3>{title}</h3>
          <p>{text}</p>
          {quiz ? (
            <div className="box__controls">
              <button className="box__button">Kvíz</button>
              <button className="box__button box__button--more">Více...</button>
            </div>
          ) : null}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
