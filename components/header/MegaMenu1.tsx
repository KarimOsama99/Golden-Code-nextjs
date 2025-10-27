"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import avatar from "@/public/images/bg/avatar.png";
import quote from "@/public/images/icon/quote.png";

const MegaMenu1: React.FC = () => {
  const items = [
    {
      href: "/about",
      icon: "/images/icon/m_01.svg",
      title: "About Us",
      desc: "Learn more about Golden Code",
    },
    {
      href: "/pricing",
      icon: "/images/icon/m_02.svg",
      title: "Our Pricing",
      desc: "Streamlined Pricing",
    },
    {
      href: "/team",
      icon: "/images/icon/m_03.svg",
      title: "Our Team",
      desc: "We are friendly. Join our team.",
    },
    {
      href: "/services",
      icon: "/images/icon/m_04.svg",
      title: "Services",
      desc: "Happy to help you!",
    },
    // { href: '/service-single', icon: '/images/icon/m_05.svg', title: 'Services Details', desc: 'Happy to help you!' },
    {
      href: "/faq",
      icon: "/images/icon/m_06.svg",
      title: "FAQ",
      desc: "Frequently Asked Questions.",
    },
    {
      href: "/career",
      icon: "/images/icon/m_07.svg",
      title: "Career",
      desc: "Work with us!",
    },
    // { href: '/career-details', icon: '/images/icon/m_08.svg', title: 'Career Details', desc: 'Open roles and more.' },
    // { href: '/portfolio-details', icon: '/images/icon/m_09.svg', title: 'Portfolio Details', desc: 'Detailed breakdowns.' },
    // { href: '/terms-conditions', icon: '/images/icon/m_10.svg', title: 'Terms & Conditions', desc: 'Your rights & responsibilities.' },
    // { href: '/privacy-policy', icon: '/images/icon/m_11.svg', title: 'Privacy Policy', desc: 'Commitment to confidentiality.' },
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
                <div className="col-xl-9">
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
                  <ul className="btns_group p-0 unordered_list justify-content-start">
                    <li>
                      <Link
                        href="/contact"
                        className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black"
                      >
                        Get free consultation
                      </Link>
                    </li>

                    <div className="social_inner ul_li">
                      <h5>Follow Us:</h5>
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
                          <Link href="https://www.instagram.com/goldencodee/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>

                {/* Right side */}
                <div className="col-xl-3">
                  <div className="autpr_box">
                    <div className="site_author">
                      <div className="author_box">
                        <div className="author_image bg-light">
                          <Image
                            src={avatar}
                            alt="Author"
                            width={60}
                            height={60}
                            style={{ height: "auto" }}
                          />
                        </div>
                        <div className="author_box_content">
                          <h3 className="author_name text-white">
                            Karim Osama
                          </h3>
                          <span className="author_designation text-white">
                            CEO at Golden Code
                          </span>
                        </div>
                      </div>
                      <p className="mb-0 text-white">
                        “As CEO at Golden Code, I’ve worked hard to clarify
                        client requirements and deliver results efficiently
                        without reinventing the wheel.”
                      </p>
                      <div className="author_box_quote">
                        <Image
                          src={quote}
                          alt="Quote"
                          width={40}
                          height={40}
                          style={{ height: "auto" }}
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
