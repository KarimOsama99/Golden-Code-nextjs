'use client';

import React, { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon1 from '@/public/images/icon/sms-white.svg';
import icon2 from '@/public/images/icon/call-white.svg';
import icon3 from '@/public/images/icon/location.svg';
// import icon4 from '@/public/images/icon/sms02.svg';
import logo4 from '@/public/images/logo/logo4.png';
import Services from '@/api/service';

interface FooterProps {}

const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className="footer footer-style-two pt-200 bg_img pos-rel"
      style={{ backgroundColor: "#0c111d" }}
    >
      <div className="container">
        <div className="xb-footer pt-120">
          {/* Contact Info */}
          <div className="footer-info ul_li_between">
            <div className="info-item ul_li">
              <div className="xb-item--icon">
                <span>
                  <Image src={icon1} alt="Email Icon" />
                </span>
              </div>
              <div className="xb-item--holder">
                <p className="xb-item--content">Write to us</p>
                <h4 className="xb-item--title">sales@goldencodee.com</h4>
              </div>
            </div>
            <div className="info-item ul_li">
              <div className="xb-item--icon clr-blue">
                <span>
                  <Image src={icon2} alt="Call Icon" />
                </span>
              </div>
              <div className="xb-item--holder">
                <p className="xb-item--content">Call Us (EG)</p>
                <h4 className="xb-item--title">+(20) 1124 762 799</h4>
              </div>
            </div>
            <div className="info-item ul_li">
              <div className="xb-item--icon clr-sky">
                <span>
                  <Image src={icon3} alt="Location Icon" />
                </span>
              </div>
              <div className="xb-item--holder">
                <p className="xb-item--content">Our Office</p>
                <h4 className="xb-item--title">Cairo, Hadayek-Helwan</h4>
              </div>
            </div>
          </div>

          {/* Footer Widgets */}
          <div className="footer-inner mt-70 mb-100 ul_li_between align-items-start">
            {/* Newsletter */}
            <div className="sa-newslatter footer-widget">
              <Image src={logo4} width={200} height={75} alt="Logo" />
              <p className="text-white mt-30">
                Golden Code The best team specialized in designing and
                programming websites, blogs and online stores.
              </p>
            </div>

            {/* Company Links */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Company</span>
              <ul className="xb-item--holder list-unstyled">
                <li className="xb-item--list">
                  <Link href="/about">About us</Link>
                </li>
                <li className="xb-item--list">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="xb-item--list">
                  <Link href="/pricing">Price table</Link>
                </li>
                <li className="xb-item--list">
                  <Link href="/blog">Our blog</Link>
                </li>
                <li className="xb-item--list">
                  <Link href="/team">Team member</Link>
                </li>
                <li className="xb-item--list">
                  <Link href="/portfolio">Our Projects</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Our Services</span>
              <ul className="xb-item--holder list-unstyled">
                {Services.slice(0, 6).map((service) => (
                  <li key={service.Id} className="xb-item--list">
                    {service.title && (
                      <Link href={`/services/${service.slug.toLowerCase()}`}>
                        <span className="icon_list_text">{service.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            {/* <div className="footer-widget">
              <span className="xb-item--sub-title">Our Industries</span>
              <ul className="xb-item--holder list-unstyled">
                <li className="xb-item--list"><Link href="/">Healthcare</Link></li>
                <li className="xb-item--list"><Link href="/">Lawyers</Link></li>
                <li className="xb-item--list"><Link href="/">Real estate</Link></li>
                <li className="xb-item--list"><Link href="/">Insurance</Link></li>
                <li className="xb-item--list"><Link href="/">Crypto</Link></li>
                <li className="xb-item--list"><Link href="/">Automotive</Link></li>
              </ul>
            </div> */}
          </div>

          {/* Footer Bottom */}
          <div className="footer-copyright mt-70 ul_li_between">
            <p className="copyright mt-20">
              Copyright © 2025 <Link href="/">Golden Code</Link>. All rights
              reserved.
            </p>
            <ul className="footer-link ul_li mt-20">
              <li>
                <span>Follow us :</span>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="Twitter">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3872 0H15.9952L10.299 7.20048L17 17H11.7545L7.64298 11.0582L2.94415 17H0.332464L6.42395 9.29688L0 0H5.37853L9.09105 5.43101L13.3872 0ZM12.4711 15.2755H13.9155L4.5917 1.63462H3.0402L12.4711 15.2755Z"
                      fill="#ffffff80"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
