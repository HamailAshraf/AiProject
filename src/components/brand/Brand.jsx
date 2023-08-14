// eslint-disable-next-line no-unused-vars
import React from 'react';
import './brand.css';
import { google, slack, dropbox, atlassian, shopify } from './imports';

export const Brand = () => {
   return (
    <>
    <div className='gpt3__brand section__padding'>
    <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='google'/>
      </div>
      <div>
        <img src={atlassian} alt='google'/>
      </div>
      <div>
        <img src={dropbox} alt='google'/>
      </div>
      <div>
        <img src={shopify} alt='google'/>
      </div>    
    </div>
    </>
  );
};
