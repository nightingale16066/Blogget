import React from 'react';
import style from './StartPage.module.css';
import PropTypes from 'prop-types';

export const StartPage = ({welcome = true}) => (
  <div className={style.container}>
    <div className={style.wrapper}>
      {welcome ?
        <>
          <h1>Стартовая страница</h1>
          <h2>Добро пожаловать!</h2>
          <h3>Выберите категорию</h3>
        </> :
        <>
          <h1>Страница не найдена</h1>
          <h2>Ошибка 404</h2>
        </>
      }
    </div>
  </div>
);

StartPage.propTypes = {
  welcome: PropTypes.bool,
};

// export const ErrorPage = () => (
//   <>
//     <h1>Страница не найдена</h1>
//     <h2>Ошибка 404</h2>
//   </>
// );
