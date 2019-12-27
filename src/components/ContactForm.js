import React from 'react';

import './ContactForm.scss';

export default function ContactForm() {

  return (
    <section className='contact-form'>
      <h2 className='contact-form__heading'>Get in Touch!</h2>
      <form className='contact-form__form'>
        <div className="contact-form__input-wrapper">
          <label for='name' className='contact-form__label'>Name</label>
          <input type='text' id='name' className='contact-form__input' required></input>
        </div>
        <div className="contact-form__input-wrapper">
          <label for='email' className='contact-form__label'>E-mail</label>
          <input type='text' id='email' className='contact-form__input' required></input>
        </div>
        <div className="contact-form__input-wrapper">
          <label for='message' className='contact-form__label'>Message</label>
          <textarea type='text' id='message' className='contact-form__input' required></textarea>
        </div>

      </form>
    </section>

  )
}
