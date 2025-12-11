import React from 'react';
import {Link} from '@/i18n/routing';
import mImg from "@/public/images/vectors/servMenu.png";
import Image from 'next/image';
import getServices from '@/api/service'; 

import {useTranslations} from 'next-intl';

const MegaMenu2 = () => {
    const t = useTranslations('MegaMenu2');
    const tServices = useTranslations('ServiceData');
    const services = getServices(tServices);

    return (
      <ul className="submenu">
        <li>
          <div className="mega_menu_wrapper">
            <div className="container">
              <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
                <div className="row justify-content-lg-between">
                  <div className="col-xl-8">
                    <div className="megamenu_widget_inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {services.slice(0, 3).map((service) => (
                                <li key={service.Id}>
                                  <Link
                                    href={`/services/${service.slug.toLowerCase()}`}
                                  >
                                    <span className="icon_list_text">
                                      {service.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {services.slice(3, 6).map((service) => (
                                <li key={service.Id}>
                                  <Link
                                    href={`/services/${service.slug.toLowerCase()}`}
                                  >
                                    <span className="icon_list_text">
                                      {service.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="social_area">
                      <p className="career_link m-0">
                        {t('careerPrompt')}{" "}
                        <Link href="/career">{t('hiring')}</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="megamenu_case">
                      <h3>{t('software')}</h3>
                      <h4>{t('amazingServices')}</h4>
                      <Image
                        src={mImg}
                        alt="services"
                        width={200}
                        className="mb-0 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
}

export default MegaMenu2;