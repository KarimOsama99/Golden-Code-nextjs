'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  coverLetter: string;
  cvLink: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  cvLink?: string;
}

interface ApplyFormProps {
  jobTitle?: string;
}

// Input sanitization function to prevent XSS attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

const ApplyForm: React.FC<ApplyFormProps> = ({ jobTitle = 'Position Not Specified' }) => {
  const t = useTranslations('ApplyForm');

  const [forms, setForms] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    coverLetter: '',
    cvLink: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: '',
  });

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return t('validation.nameRequired');
    }
    if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(name)) {
      return t('validation.nameAlphaSpace');
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return t('validation.emailRequired');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return t('validation.emailInvalid');
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return t('validation.phoneRequired');
    }
    if (!/^[+]?[\d\s-()]+$/.test(phone)) {
      return t('validation.phoneInvalid');
    }
    return undefined;
  };

  const validateAddress = (address: string): string | undefined => {
    if (!address.trim()) {
      return t('validation.addressRequired');
    }
    return undefined;
  };

  const validateCvLink = (cvLink: string): string | undefined => {
    if (!cvLink.trim()) {
      return t('cvLinkRequired');
    }
    
    // Validate URL format
    try {
      const url = new URL(cvLink);
      // Only allow http and https protocols for security
      if (!['http:', 'https:'].includes(url.protocol)) {
        return t('cvLinkInvalid');
      }
    } catch {
      return t('cvLinkInvalid');
    }
    
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(forms.name),
      email: validateEmail(forms.email),
      phone: validatePhone(forms.phone),
      address: validateAddress(forms.address),
      cvLink: validateCvLink(forms.cvLink),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForms(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (touched[name]) {
      const fieldError = 
        name === 'name' ? validateName(value) :
        name === 'email' ? validateEmail(value) :
        name === 'phone' ? validatePhone(value) :
        name === 'address' ? validateAddress(value) :
        name === 'cvLink' ? validateCvLink(value) :
        undefined;
      
      setErrors(prev => ({ ...prev, [name]: fieldError }));
    }
  };

  const blurHandler = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    const fieldValue = forms[field as keyof FormState];
    const fieldError = 
      field === 'name' ? validateName(fieldValue) :
      field === 'email' ? validateEmail(fieldValue) :
      field === 'phone' ? validatePhone(fieldValue) :
      field === 'address' ? validateAddress(fieldValue) :
      field === 'cvLink' ? validateCvLink(fieldValue) :
      undefined;
    
    setErrors(prev => ({ ...prev, [field]: fieldError }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, phone: true, address: true, cvLink: true });

    if (validateForm()) {
      setLoading(true);
      setStatus({ type: '', message: '' });

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_JOBSFORM_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!serviceID || !templateID || !publicKey) {
        setLoading(false);
        setStatus({ type: 'error', message: t('envError') });
        console.error('EmailJS keys not configured correctly in .env.local');
        return;
      }

      try {
        // Sanitize all inputs before sending
        const sanitizedParams = {
          name: sanitizeInput(forms.name),
          email: sanitizeInput(forms.email),
          user_name: sanitizeInput(forms.name),
          user_email: sanitizeInput(forms.email),
          user_phone: sanitizeInput(forms.phone),
          user_address: sanitizeInput(forms.address),
          user_cover_letter: sanitizeInput(forms.coverLetter) || 'No cover letter provided',
          position_applied: sanitizeInput(jobTitle),
          cv_link: forms.cvLink, // Don't sanitize URL, but already validated
          to_name: 'Golden Code Team',
        };

        // Send using emailjs.send
        const result = await emailjs.send(
          serviceID,
          templateID,
          sanitizedParams,
          publicKey
        );

        console.log('EmailJS SUCCESS!', result.text);
        setStatus({ type: 'success', message: t('successMessage') });
        
        // Clear form after success
        setForms({
          name: '',
          email: '',
          phone: '',
          address: '',
          coverLetter: '',
          cvLink: '',
        });
        setErrors({});
        setTouched({});
        
      } catch (error: any) {
        console.log('EmailJS FAILED...', error);
        setStatus({ type: 'error', message: t('errorMessage', { error: error.text || error.message || 'Unknown error' }) });
      } finally {
        setLoading(false);
      }
    } else {
      setStatus({ type: 'error', message: t('validationError') });
    }
  };

  return (
    <div className="cs-contact-wrap cs-contact-form cd-contact-form">
      <h2 className="xb-title">{t('title')}</h2>
      <p className="xb-content">
        {t('description')}
      </p>
      <form onSubmit={submitHandler} className="contact-form">
        <div className="row">
          {/* Name field */}
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="name">{t('name')}</label>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={forms.name}
                  onChange={changeHandler}
                  onBlur={() => blurHandler('name')}
                />
                {touched.name && errors.name && (
                  <span className="errorMessage">{errors.name}</span>
                )}
              </div>
            </div>
          </div>

          {/* Email field */}
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="email">{t('email')}</label>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={forms.email}
                  onChange={changeHandler}
                  onBlur={() => blurHandler('email')}
                />
                {touched.email && errors.email && (
                  <span className="errorMessage">{errors.email}</span>
                )}
              </div>
            </div>
          </div>

          {/* Phone field */}
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="phone">{t('phone')}</label>
              <div className="input-box">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={forms.phone}
                  onChange={changeHandler}
                  onBlur={() => blurHandler('phone')}
                />
                {touched.phone && errors.phone && (
                  <span className="errorMessage">{errors.phone}</span>
                )}
              </div>
            </div>
          </div>

          {/* Address field */}
          <div className="col-lg-6">
            <div className="input-field">
              <label htmlFor="address">{t('address')}</label>
              <div className="input-box">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={forms.address}
                  onChange={changeHandler}
                  onBlur={() => blurHandler('address')}
                />
                {touched.address && errors.address && (
                  <span className="errorMessage">{errors.address}</span>
                )}
              </div>
            </div>
          </div>

          {/* CV Link field */}
          <div className="col-lg-12">
            <div className="input-field">
              <label htmlFor="cvLink">{t('cvLink')}</label>
              <div className="input-box">
                <input
                  className="w-100"
                  type="url"
                  name="cvLink"
                  id="cvLink"
                  value={forms.cvLink}
                  onChange={changeHandler}
                  onBlur={() => blurHandler('cvLink')}
                />
                {touched.cvLink && errors.cvLink && (
                  <span className="errorMessage">{errors.cvLink}</span>
                )}
              </div>
            </div>
          </div>

          {/* Cover Letter field (optional) */}
          <div className="col-lg-12">
            <div className="input-field text-field">
              <label htmlFor="coverLetter">{t('coverLetter')}</label>
              <div className="input-box">
                <textarea
                  name="coverLetter"
                  id="coverLetter"
                  value={forms.coverLetter}
                  onChange={changeHandler}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="cp-det-btn mt-20 d-grid">
          <button className="cp-btn thm-btn--aso thm-btn--aso_yellow" type="submit" disabled={loading}>
            {loading ? t('sending') : t('submitNow')} <i className="fal fa-arrow-right text-white"></i>
          </button>
        </div>

        {/* Status message */}
        {status.message && (
          <div 
            role="alert"
            style={{ 
              marginTop: '20px', 
              padding: '14px 18px', 
              borderRadius: '10px', 
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '15px',
              fontWeight: 500,
              lineHeight: 1.5,
              color: status.type === 'success' ? '#166534' : '#991b1b', 
              backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
              border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s ease'
            }}
          >
            {status.type === 'success' ? (
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#16a34a"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="#dc2626"/>
              </svg>
            )}
            <span>{status.message}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplyForm;