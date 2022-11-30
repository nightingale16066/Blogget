import React from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Content = ({title, author}) => {
  console.log();
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size={18}
          tsize={24} className={style.linkPost} href="#post">
          {title}
        </Text>
        <Text As='a'
          color='orange'
          size={12}
          tsize={14}
          className={style.linkAuthor}
          href="#author"
        >
          {author}
        </Text>
      </Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
};
