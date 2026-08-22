import React from 'react';
import { Fade } from "react-awesome-reveal";
import check from '@/public/images/icon/check.svg';
import error from '@/public/images/icon/erorr.svg';
import logo from '@/public/images/logo/logo4.png';
import star from '@/public/images/icon/star.svg';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

interface FeaturesSectionProps {
}

const FeaturesSection: React.FC<FeaturesSectionProps> = (props) => {
  const t = useTranslations('Features');
  return (
    <section className="feature">
      <div className="feature-wrapper sec-bg sec-bg--2 pt-130 pb-130">
        <div className="container">
          <div className="feature_inner">
            <div className="sec-title--two text-center mb-60">
              <Fade direction='down' triggerOnce={false} duration={1000} delay={9}>
                <div>
                  <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                    <Image src={star} alt="Star icon" />{t('subtitle')}
                  </div>
                </div>
              </Fade>
              <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                <div>
                  <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                    {t('title')}
                  </h2>
                </div>
              </Fade>
            </div>
            <table className="feature-table">
              <thead>
                <tr>
                  <th>{t('col1')}</th>
                  <th><Image src={logo} alt="Our Logo" width={200} /></th>
                  <th>{t('col3')}</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>{t('row1')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={error} alt="Error icon" /></td>
                </tr>
                <tr>
                  <td>{t('row2')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={error} alt="Error icon" /></td>
                </tr>
                <tr>
                  <td>{t('row3')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={error} alt="Error icon" /></td>
                </tr>
                <tr>
                  <td>{t('row4')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={check} alt="Checkmark" /></td>
                </tr>
                <tr>
                  <td>{t('row5')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={error} alt="Error icon" /></td>
                </tr>
                <tr>
                  <td>{t('row6')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={error} alt="Error icon" /></td>
                </tr>
                <tr>
                  <td>{t('row7')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={check} alt="Checkmark" /></td>
                </tr>
                <tr>
                  <td>{t('row8')}</td>
                  <td><Image src={check} alt="Checkmark" /></td>
                  <td><Image src={check} alt="Checkmark" /></td>
                </tr>
              </tbody>
            </table>

            {/* Mobile-only stacked-card version of the same comparison —
                a 3-column table doesn't fit a phone screen readably. */}
            <div className="gc-compare-cards">
              {[
                { label: t('row1'), us: true, them: false },
                { label: t('row2'), us: true, them: false },
                { label: t('row3'), us: true, them: false },
                { label: t('row4'), us: true, them: true },
                { label: t('row5'), us: true, them: false },
                { label: t('row6'), us: true, them: false },
                { label: t('row7'), us: true, them: true },
                { label: t('row8'), us: true, them: true },
              ].map((row, idx) => (
                <div className="gc-compare-card" key={idx}>
                  <p className="gc-compare-card-title">{row.label}</p>
                  <div className="gc-compare-row is-us">
                    <span className="gc-compare-row-label">{t('usLabel')}</span>
                    <span className={`gc-compare-icon ${row.us ? "is-yes" : "is-no"}`}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.5L4.2 7.7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="gc-compare-row">
                    <span className="gc-compare-row-label">{t('col3')}</span>
                    {row.them ? (
                      <span className="gc-compare-icon is-yes">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.2 7.7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    ) : (
                      <span className="gc-compare-icon is-no">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
