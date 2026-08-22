import React from 'react';
import CountUp from 'react-countup';

interface FunFact {
  value: number;
  suffix?: string;
  text: string;
  delay: string;
  isMiddle?: boolean;
  isLast?: boolean;
}

const getFunFacts = (t: any) => [
  {
    value: 20,
    suffix: '+',
    text: t('item1'),
    delay: '0ms',
  },
  {
    value: 12,
    suffix: '+',
    text: t('item2'),
    delay: '200ms',
    isMiddle: true,
  },
  {
    value: 98,
    suffix: '%',
    text: t('item3'),
    delay: '300ms',
    isLast: true,
  },
];

import {useTranslations} from 'next-intl';

const FunfactSection: React.FC = () => {
  const t = useTranslations('AboutFunfact');
  const funFacts = getFunFacts(t);
  return (
    <section className="fanfact pt-85 pb-125">
      <div className="container">
        <div className="row mt-none-30">
          {funFacts.map((fact, index) => {
            let itemClass = 'ap-fanfact-item wow fadeInUp text-center';
            if (fact.isMiddle) itemClass += ' ap-fanfact-item--middle';
            if (fact.isLast) itemClass += ' ap-fanfact-item--last';

            return (
              <div className="col-lg-4 col-md-4 mt-30" key={index}>
                <div
                  className={itemClass}
                  data-wow-delay={fact.delay}
                  data-wow-duration="600ms"
                >
                  <h2 className="xb-item--number">
                    <CountUp end={fact.value} enableScrollSpy />
                    {fact.suffix}
                  </h2>
                  <span className="xb-item--text">{fact.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunfactSection;
