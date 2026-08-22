"use client";

import React from "react";
import {Link} from '@/i18n/routing';
import Image from "next/image";

import avatar from "@/public/images/bg/avatar.png";
import quote from "@/public/images/icon/quote.png";

import {useTranslations} from 'next-intl';

const MegaMenu1: React.FC = () => {
  const t = useTranslations('MegaMenu1');

  const items = [
    {
      href: "/about",
      icon: "/images/icon/m_01.svg",
      title: t('aboutUs'),
      desc: t('aboutDesc'),
    },
    {
      href: "/team",
      icon: "/images/icon/m_03.svg",
      title: t('team'),
      desc: t('teamDesc'),
    },
    {
      href: "/faq",
      icon: "/images/icon/m_06.svg",
      title: t('faq'),
      desc: t('faqDesc'),
    },
  ];

  const clientLogos = [
    { src: "/images/logo/client-logo.svg", alt: "Client 1" },
    { src: "/images/logo/client-logo2.svg", alt: "Client 2" },
  ];

  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container">
            <div className="mega_menu_wrapper_inner">
              <div className="row">
                {/* Left side */}
                <div className="col-xl-9 d-flex flex-column justify-content-between h-100">
                  <div className="megamenu_pages_wrapper mb-5">
                    <div className="row g-10">
                      {items.map((item, index) => (
                        <div className="col-xl-4 col-md-4" key={index}>
                          <Link className="iconbox_block_2" href={item.href}>
                            <span className="icon_title_wrap">
                              <small className="iconbox_icon">
                                <Image
                                  src={item.icon}
                                  alt={item.title}
                                  width={40}
                                  height={40}
                                  style={{ height: "auto" }}
                                />
                              </small>
                              <small className="iconbox_title">
                                {item.title}
                              </small>
                            </span>
                            <span className="description mb-0">
                              {item.desc}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons and Reviews */}
                  <ul className="btns_group p-0 unordered_list justify-content-start mt-4">
                    <li>
                      <Link
                        href="/contact"
                        className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black"
                      >
                        {t('freeConsultation')}
                      </Link>
                    </li>

                    <div className="social_inner ul_li">
                      <h5>{t('followUs')}</h5>
                      <ul className="social_icons_block unordered_list">
                        <li>
                          <Link
                            href="https://www.facebook.com/goldencodee/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6774 7.62177L17.2342 0H15.6805L9.98719 6.61788L5.43998 0H0.195312L7.07159 10.0074L0.195312 18H1.74916L7.76141 11.0113L12.5636 18H17.8083L10.677 7.62177H10.6774ZM8.54921 10.0956L7.8525 9.09906L2.30903 1.16971H4.69564L9.16929 7.56895L9.866 8.56546L15.6812 16.8835H13.2946L8.54921 10.096V10.0956Z"
                                fill="#0C111D"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/goldencoode/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>

                {/* Right side */}
                <div className="col-xl-3">
                  <div className="autpr_box" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                    <div className="site_author">
                      <div className="author_box" style={{ marginBottom: '20px' }}>
                        <div className="author_image bg-light">
                          <Image
                            src={avatar}
                            alt="Author"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="author_box_content">
                          <h3 className="author_name text-white">
                            {t('ceoName')}
                          </h3>
                          <span className="author_designation text-white">
                            {t('ceoTitle')}
                          </span>
                        </div>
                      </div>
                      <p className="mb-0 text-white">
                        “{t('ceoQuote')}”
                      </p>
                      <div className="author_box_quote">
                        <Image
                          src={quote}
                          alt="Quote"
                          width={40}
                          height={40}
                        />
                      </div>
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
};

export default MegaMenu1;
