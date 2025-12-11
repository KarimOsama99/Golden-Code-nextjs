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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
