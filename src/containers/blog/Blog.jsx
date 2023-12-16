// eslint-disable-next-line no-unused-vars
import React from 'react'
import './blog.css';
import { Article } from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05} from './imports';

export const Blog = () => {
  return (
    <>
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <span>We are bloggin about it.</span></h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Aug 14, 2023' title='Predict-ETH and Open AI is the future. Let us explore how it is?'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='Aug 14, 2023' title='Predict-ETH and Open AI is the future. Let us explore how it is?'/>
          <Article imgUrl={blog03} date='Aug 14, 2023' title='Predict-ETH and Open AI is the future. Let us explore how it is?'/>
          <Article imgUrl={blog04} date='Aug 14, 2023' title='Predict-ETH and Open AI is the future. Let us explore how it is?'/>
          <Article imgUrl={blog05} date='Aug 14, 2023' title='Predict-ETH and Open AI is the future. Let us explore how it is?'/>
        </div>
      </div>
    </div>
    </>
  );
};
