import React, { useEffect } from 'react';
import './style.css';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

export const TimelineContent = ({
  title,
  text,
  quiz,
  imgSrc,
  year,
  moreInfo,
}) => {
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
      className="timeline__box"
      contentArrowStyle={{ borderRight: '7px solid  var(--red)' }}
      iconStyle={{
        background: 'var(--red)',
        color: '#fff',
        boxShadow: 'none',
      }}
      icon={<span>{year}</span>}
    >
      <div
        className="box__image"
        style={{
          background: `top/cover no-repeat url(${imgSrc}), linear-gradient(transparent, 80%, rgb(255, 255, 255))`,
          backgroundBlendMode: 'overlay',
          color: 'var(--text)',
        }}
      ></div>
      <div className="box__text">
        <h4>{title}</h4>
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
          <Modal {...textModalProps}>{moreInfo}</Modal>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
