'use client';

import React, { useState } from 'react';
import hicon from '@/public/images/icon/magic.svg';
import { Fade } from 'react-awesome-reveal';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

const FaqSection: React.FC = () => {
  const t = useTranslations('Faq');

  const faqList: FaqItem[] = [
    {
      id: '1',
      question: t('q1'),
      content: {
        text: t('a1'),
        points: [
          t('a1p1'),
          t('a1p2'),
          t('a1p3')
        ]
      }
    },
    {
      id: '2',
      question: t('q2'),
      content: {
        text: t('a2'),
        points: [
          t('a2p1'),
          t('a2p2'),
          t('a2p3')
        ]
      }
    },
    {
      id: '3',
      question: t('q3'),
      content: {
        text: t('a3'),
        points: [
          t('a3p1'),
          t('a3p2'),
          t('a3p3')
        ]
      }
    },
    {
      id: '4',
      question: t('q4'),
      content: {
        text: t('a4'),
        points: [
          t('a4p1'),
          t('a4p2'),
          t('a4p3')
        ]
      }
    },
    {
      id: '5',
      question: t('q5'),
      content: {
        text: t('a5'),
        points: [
          t('a5p1'),
          t('a5p2'),
          t('a5p3')
        ]
      }
    }
  ];

  const [open, setOpen] = useState<string>('1');

  const toggle = (id: string) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq pb-140">
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
            <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
              <Image src={hicon} alt="Magic Icon" /> {t('subtitle')}
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
            <h2
              className="title wow fadeInDown"
              data-wow-delay="150ms"
              data-wow-duration="600ms"
            >
              {t('title')}
            </h2>
          </Fade>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="xb-faq wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="600ms"
            >
              <Accordion
                open={open}
                toggle={toggle}
                className="accordion_box clearfix list-unstyled"
              >
                {faqList.map(({ id, question, content }) => (
                  <AccordionItem className="block" key={id}>
                    <AccordionHeader targetId={id} className="acc-btn">
                      <span className="number no-small">{id}</span> <span className='no-small'>_</span>{" "}
                      {question}
                      <span className="arrow"></span>
                    </AccordionHeader>
                    <AccordionBody accordionId={id} className="acc_body">
                      <div className="content">
                        <p>{content.text}</p>
                        <ul className="list-unstyled">
                          {content.points.map((point, idx) => (
                            <li key={idx}>
                              <i className="far fa-check"></i>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

interface FaqContent {
  text: string;
  points: string[];
}

interface FaqItem {
  id: string;
  question: string;
  content: FaqContent;
}


