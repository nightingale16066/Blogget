import React from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';

export const Content = ({title, author}) => {
  console.log(style);
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href="#post">
          {title}
        </a>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </h2>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
};
