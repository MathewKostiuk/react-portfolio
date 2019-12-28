import React, { useEffect } from 'react';

import './ContactForm.scss';

export default function ContactForm() {

  useEffect(() => {
    const contactForm = document.querySelector('.contact-form');
    contactForm.style.backgroundImage = `url(/images/color-background.png)`;
    console.log(contactForm.style.backgroundImage);
  })

  return (
    <section className='contact-form'>
      <h2 className='contact-form__heading'>Get in Touch!</h2>
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
          <label htmlFor='message' className='contact-form__label'>Message</label>
          <textarea type='text' id='message' className='contact-form__input' required></textarea>
        </div>
        <div className="contact-form__input-wrapper">
          <input className='contact-form__submit' type='submit' value='Submit'></input>
        </div>
      </form>
    </section>

  )
}
