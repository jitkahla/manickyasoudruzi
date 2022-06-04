import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineContent } from '../TimelineContent';

const Timeline = () => (
  <VerticalTimeline lineColor={'#000000'} layout={'2-columns'}>
    <TimelineContent
      title={'Komunisté se ujali moci'}
      text={
        'Zvláštností komunistického převratu v Československu, ve srovnání s obdobnými procesy v jiných státech východní Evropy, byla skutečnost, že proběhl za podpory velké části obyvatelstva.'
      }
      quiz={false}
      imgSrc={'/img/unor48.jpg'}
    />
    <TimelineContent
      title={'Soudruzi na věčné časy?'}
      text={
        'Nástup komunismu v Československu s sebou z dnešního pohledu přinesl i rozdělení společnosti na komunistické soudruhy a třídní nepřátele. Komunističtí soudruzi se pak ihned začali zbavovat svých třídních nepřátel, tedy lidí s odlišným politickým viděním světa, buržoazie, inteligence… Zdálo by se, že tedy být na té “správné” straně je vcelku jednoduchá záležitost a stačí k tomu stranická knížka KSČ a zápal pro věc. Obludnost komunistického totalitního režimu ale spočívala v tom, že na druhé straně barikády se mohl ocitnout najednou i ten, který likvidační mašinerii oponentů sám pomáhal budovat.'
      }
      quiz={true}
      imgSrc={'/img/tuzex.jpg'}
    />
  </VerticalTimeline>
);

export default Timeline;
