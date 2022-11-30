import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import Content from './Content';
import Delete from './Delete';
import Rating from './Rating';
import Time from './Time';
import UserPhoto from './UserPhoto';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <UserPhoto/>
      <Content title={title} author={author}/>
      <Rating ups={ups}/>
      <Time date={date}/>
      <Delete/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
