import React from 'react';

import './ContactForm.scss';

export default function ContactForm() {

  return (
    <section id='contact' className='contact-form'>
      <h2 className='contact-form__heading'>Have an idea for a project? <span className='brand-text'>Let's work together </span>on it.</h2>
      <form className='contact-form__form'>
        <div className="contact-form__input-wrapper">
          <label htmlFor='name' className='contact-form__label'>Name</label>
          <input type='text' id='name' className='contact-form__input' required></input>
        </div>
        <div className="contact-form__input-wrapper">
          <label htmlFor='email' className='contact-form__label'>E-mail</label>
          <input type='text' id='email' className='contact-form__input' required></input>
        </div>
        <div className="contact-form__input-wrapper">
          <textarea type='text' id='message' className='contact-form__input' placeholder='Write your message here' required></textarea>
        </div>
        <div className="contact-form__input-wrapper">
          <input className='contact-form__submit' type='submit' value='Submit'></input>
        </div>
      </form>
    </section>
  )
}
