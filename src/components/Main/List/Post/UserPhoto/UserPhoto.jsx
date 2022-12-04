import React from 'react';
import style from './UserPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const UserPhoto = ({thumbnail}) => {
  const photo = thumbnail.includes('http') ? thumbnail : notphoto;
  return (
    <img className={style.img} src={photo} alt="title" />
  );
};

UserPhoto.propTypes = {
  thumbnail: PropTypes.string,
};
