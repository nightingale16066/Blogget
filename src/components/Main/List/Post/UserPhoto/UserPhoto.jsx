import React from 'react';
import style from './UserPhoto.module.css';
import notphoto from './img/notphoto.jpg';


export const UserPhoto = (props) => {
  console.log();
  return (
    <img className={style.img} src={notphoto} alt="title" />
  );
};
