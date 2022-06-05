import React, { useEffect } from 'react';
import './style.css';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

export const TimelineContent = ({ title, text, quiz, imgSrc }) => {
  const {
    modalProps: quizModalProps,
    getTriggerProps: getQuizTriggerProps,
    close: quizClose,
  } = useModal({
    background: 'var(--background)',
  });
  const {
    modalProps: textModalProps,
    getTriggerProps: getTextTriggerProps,
    close: textClose,
  } = useModal({
    background: 'var(--background)',
  });

  useEffect(() => {
    return () => {
      quizClose();
      textClose();
      document.querySelector('body').style.removeProperty('overflow');
    };
  }, []);

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
        <img className="box__image" src={imgSrc} />
        <div className="box__text">
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="box__controls">
            {quiz ? (
              <>
                <button className="box__button" {...getQuizTriggerProps()}>
                  Kvíz
                </button>
                <Modal {...quizModalProps}>{quiz}</Modal>
              </>
            ) : null}
            <button
              className="box__button box__button--more"
              {...getTextTriggerProps()}
            >
              Více...
            </button>
            <Modal {...textModalProps}>Text</Modal>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
