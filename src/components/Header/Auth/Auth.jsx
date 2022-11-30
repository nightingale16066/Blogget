import React from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthLogo} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth : <AuthLogo/>}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
