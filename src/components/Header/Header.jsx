import React from 'react';
import Layout from '../Layout';
import style from './Header.module.css';
import Logo from './Logo';
import Auth from './Auth';
import Search from './Search';
import Heading from './Heading';

export const Header = props => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading text='Главная'/>
          <Search/>
          <Auth auth={false}/>
        </div>
      </Layout>
    </header>
  );
};