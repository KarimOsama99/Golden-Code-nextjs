'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const t = useTranslations('ContactForm');
  
  const formRef = useRef<HTMLFormElement>(null);

  const [forms, setForms] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
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

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return t('validation.messageRequired');
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(forms.name),
      email: validateEmail(forms.email),
      phone: validatePhone(forms.phone),
      message: validateMessage(forms.message),
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
        name === 'message' ? validateMessage(value) :
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
      field === 'message' ? validateMessage(fieldValue) :
      undefined;
    
    setErrors(prev => ({ ...prev, [field]: fieldError }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, phone: true, message: true });

    if (validateForm()) {
      if (!formRef.current) return;

      setLoading(true);
      setStatusMessage('');

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!serviceID || !templateID || !publicKey) {
        setLoading(false);
        setStatusMessage(t('envError'));
        console.error('EmailJS keys not configured correctly in .env.local');
        return;
      }

      emailjs.sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log('EmailJS SUCCESS!', result.text);
          setStatusMessage(t('successMessage'));
          
          // Clear form after success
          setForms({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          setErrors({});
          setTouched({});
        },
        (error) => {
          console.log('EmailJS FAILED...', error.text);
          setStatusMessage(t('errorMessage', { error: error.text }));
        }
      )
      .finally(() => {
        setLoading(false);
      });
      
    } else {
      setStatusMessage(t('validationError'));
    }
  };

  return (
    <form ref={formRef} onSubmit={submitHandler} className="contact-form">
      <div className="row">
        
        {/* Name field */}
        <div className="col-lg-6">
          <div className="input-field">
            <label htmlFor="name">{t('name')}</label>
            <div className="input-box">
              <input
                value={forms.name}
                type="text"
                name="name"
                id="name"
                className="form-control"
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
                value={forms.email}
                type="email"
                name="email"
                id="email"
                className="form-control"
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
        <div className="col-lg-12">
          <div className="input-field">
            <label htmlFor="phone">{t('phone')}</label>
            <div className="input-box">
              <input
                value={forms.phone}
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                onChange={changeHandler}
                onBlur={() => blurHandler('phone')}
              />
              {touched.phone && errors.phone && (
                <span className="errorMessage">{errors.phone}</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Message field */}
        <div className="col-lg-12">
          <div className="input-field text-field">
            <label htmlFor="message">{t('message')}</label>
            <div className="input-box">
              <textarea
                value={forms.message}
                name="message"
                id="message"
                className="form-control"
                placeholder={t('messagePlaceholder')}
                onChange={changeHandler}
                onBlur={() => blurHandler('message')}
              ></textarea>
              {touched.message && errors.message && (
                <span className="errorMessage">{errors.message}</span>
              )}
            </div>
          </div>
        </div>
        
      </div>

      <div className="cp-det-btn mt-20 d-grid">
        <button className="cp-btn thm-btn--aso thm-btn--aso_yellow" type="submit" disabled={loading}>
          {loading ? t('sending') : t('submit')} <i className="fal fa-arrow-right text-white"></i>
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
  );
};

export default ContactForm;