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
                  </div>
                  <div className="col-xl-3">
                    <style>{`
                      .megamenu-custom-btn {
                        background-color: white !important;
                        color: #0c111d !important;
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
                        text-align: center !important;
                      }
                      .megamenu-custom-btn:hover {
                        background-color: var(--color-primary-two) !important;
                        color: white !important;
                      }
                    `}</style>
                    <div className="megamenu_case text-center" style={{ paddingTop: '30px', paddingBottom: '30px', minHeight: '300px' }}>
                      <h3>{t('software')}</h3>
                      <h4>{t('amazingServices')}</h4>
                      <div className="mt-5 pt-3">
                        <Link
                          href="/services"
                          className="thm-btn thm-btn--aso megamenu-btn megamenu-custom-btn w-100"
                        >
                          {t('seeAllServices')}
                        </Link>
                      </div>
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