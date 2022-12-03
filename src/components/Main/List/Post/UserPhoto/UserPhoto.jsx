import React from 'react';
import style from './UserPhoto.module.css';
import PropTypes from 'prop-types';


export const UserPhoto = ({thumbnail}) => {
  console.log();
  return (
    <img className={style.img} src={thumbnail} alt="title" />
  );
};

UserPhoto.propTypes = {
  thumbnail: PropTypes.string,
};
