'use client';

import React from "react";
import { useTranslations } from "next-intl";

const ApplyForm = () => {
  const t = useTranslations('ApplyForm');
  
  return (
    <div className="cs-contact-wrap cs-contact-form cd-contact-form">
      <h2 className="xb-title">{t('title')}</h2>
      <p className="xb-content">
        {t('description')}
      </p>
      <form className="contact-form">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="name">{t('name')}</label>
              <div className="input-box">
                <input type="text" name="text" id="name" required />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="email">{t('email')}</label>
              <div className="input-box">
                <input type="email" name="email" id="email" required />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="phone">{t('phone')}</label>
              <div className="input-box">
                <input type="tel" name="number" id="phone" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="address">{t('address')}</label>
              <div className="input-box">
                <input type="text" name="text" id="address" />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-field text-field">
              <label htmlFor="message">{t('coverLetter')}</label>
              <div className="input-box">
                <textarea name="massage" id="message"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="cp-contact-bottom ul_li_between mt-20">
          <div className="xb-item--left mt-20">
            <label htmlFor="file">{t('uploadResume')}</label>
            <input id="file" type="file" className="form-control" required />
            <p className="xb-item--content">
              <span>{t('acceptedTypes')}</span> {t('maxSize')}
            </p>
          </div>
          <div className="cp-det-btn mt-20">
            <button className="thm-btn--aso cp-btn">
              {t('submitNow')} <i className="fal fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
