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
  const [statusMessage, setStatusMessage] = useState('');

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
      setStatusMessage('');

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_JOBSFORM_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!serviceID || !templateID || !publicKey) {
        setLoading(false);
        setStatusMessage(t('envError'));
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
        setStatusMessage(t('successMessage'));
        
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
        setStatusMessage(t('errorMessage', { error: error.text || error.message || 'Unknown error' }));
      } finally {
        setLoading(false);
      }
    } else {
      setStatusMessage(t('validationError'));
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
        {statusMessage && (
          <p style={{ 
            marginTop: '20px', 
            padding: '10px', 
            borderRadius: '4px', 
            color: statusMessage.includes('✓') ? 'green' : 'red', 
            backgroundColor: statusMessage.includes('✓') ? '#e6ffe6' : '#ffe6e6' 
          }}>
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ApplyForm;