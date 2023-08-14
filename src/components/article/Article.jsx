// eslint-disable-next-line no-unused-vars
import React from 'react';
import './article.css';

// eslint-disable-next-line react/prop-types
export const Article = ({ imgUrl, date, title }) => {
  return (
    <>
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
    </>
  );
};
