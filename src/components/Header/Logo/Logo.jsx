import style from './Logo.module.css';
import logo from './img/logo.svg';
import {Link} from 'react-router-dom';

export const Logo = props => (
  <Link to={'/'} className={style.link}>
    <img className={style.logo} src={logo} alt="Logo" />
  </Link>
);
