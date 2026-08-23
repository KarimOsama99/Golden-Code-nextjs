"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { createPortal } from "react-dom";
import { Link, usePathname } from '@/i18n/routing';
import Image from "next/image";

import MobileMenu from "../MobileMenu/MobileMenu";
import MegaMenu1 from "./MegaMenu1";
import MegaMenu2 from "./MegaMenu2";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from 'next-intl';

const Header: React.FC = () => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Translations
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open, and let Escape close it —
  // small details that make it feel like a native app sheet instead of a web overlay.
  useEffect(() => {
    if (mobailActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobailState(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [mobailActive]);

  const closeMobileMenu = () => setMobailState(false);

  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // The sticky header gets a `transform` when scrolled (to slide it into
  // view), and CSS spec says any transformed ancestor becomes the
  // containing block for `position: fixed` descendants. That was trapping
  // the drawer/backdrop inside the header's own small box instead of the
  // real viewport once the user had scrolled — rendering it via a portal
  // straight onto <body> sidesteps that entirely.
  const drawerAndBackdrop = (
    <div className="xb-header-wrap">
      <div
        className={`xb-header-menu gc-app-drawer ${mobailActive ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="gc-app-drawer-top xb-hide-xl">
          <span className="gc-app-drawer-handle" aria-hidden="true" />
          <button
            type="button"
            className="gc-app-drawer-close"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <i className="far fa-times" />
          </button>
        </div>
        <div className="xb-header-menu-scroll gc-app-drawer-scroll lenis lenis-smooth">
          <nav className="xb-header-nav" onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.closest('a')) closeMobileMenu();
          }}>
            <MobileMenu />
          </nav>
        </div>
        {/* Only shown when the header's own CTA/language switcher are
            hidden (below md) — avoids showing the same controls twice. */}
        <div className="gc-app-drawer-footer d-md-none">
          <LanguageSwitcher />
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="lang-toggle-btn talk thm-btn thm-btn--aso thm-btn--aso_yellow"
          >
            {t('talk')}
            <Image
              src="/images/icon/sms-white-icon01.svg"
              alt="Message Icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      <div
        className="xb-header-menu-backdrop"
        onClick={closeMobileMenu}
      ></div>
    </div>
  );

  return (
    <div
      id="xb-header-area"
      className="header-area header-style-two header-transparent"
    >
      {/* Main Header */}
      <div
        className={`xb-header mt-4 stricky ${isSticky ? "stricked-menu stricky-fixed" : ""
          }`}
      >
        <div className="container">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="header-logo">
              <Link href="/">
                <Image
                  src="/images/logo/logo3.png"
                  alt="Texpo Logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>

            {/* Main Menu */}
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className={pathname === '/' ? "active" : ""}>
                    <Link href="/">
                      <span>{t('home')}</span>
                    </Link>
                  </li>

                  <li className={`menu-item-has-children megamenu ${pathname.startsWith('/about') || pathname.startsWith('/team') || pathname.startsWith('/faq') ? "active" : ""}`}>
                    <Link href="/about">
                      <span>{t('company')}</span>
                    </Link>
                    <MegaMenu1 />
                  </li>

                  <li className={`menu-item-has-children megamenu ${pathname.startsWith('/services') ? "active" : ""}`}>
                    <Link href="/services">
                      <span>{t('services')}</span>
                    </Link>
                    <MegaMenu2 />
                  </li>

                  <li className={pathname.startsWith('/portfolio') ? "active" : ""}>
                    <Link href="/portfolio">
                      <span>{t('portfolio')}</span>
                    </Link>
                  </li>

                  <li className={pathname.startsWith('/blog') ? "active" : ""}>
                    <Link href="/blog">
                      <span>{t('blog')}</span>
                    </Link>
                  </li>

                  <li className={pathname.startsWith('/contact') ? "active" : ""}>
                    <Link href="/contact">
                      <span>{t('contact')}</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile menu is portaled to <body> — see drawerAndBackdrop above */}
              {mounted && createPortal(drawerAndBackdrop, document.body)}
            </div>

            {/* Mobile toggle button */}
            <div className="header-bar-mobile side-menu d-xl-none">
              <button
                className="xb-nav-mobile"
                aria-label="Open menu"
                onClick={() => setMobailState(!mobailActive)}
              >
                <i className="far fa-bars" />
              </button>
            </div>

            {/* CTA */}
            <div className="header-contact d-none d-md-block">
              <div className="me-3 d-inline-block">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="lang-toggle-btn talk thm-btn thm-btn--aso thm-btn--aso_yellow"
              >
                {t('talk')}
                <Image
                  src="/images/icon/sms-white-icon01.svg"
                  alt="Message Icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
