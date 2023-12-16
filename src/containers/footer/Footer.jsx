// eslint-disable-next-line no-unused-vars
import React from 'react'
import './footer.css';

export const Footer = () => {
  return (
    <>
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <p className='gpt3__footer-links_logo_para'>Predict-ETH</p>
          <p>Floor#3 Block#Y Islamabad Pakistan, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Floor#3 Block#Y Islamabad Pakistan</p>
          <p>051-1234567</p>
          <p>hamail@hamail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};
