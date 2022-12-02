import React from 'react';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthLogo} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isExitBtn, setIsExitBtn] = useState(false);

  const handleExit = () => {
    delToken();
    setAuth({});
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => {
        if (res.ok) return res.json();
        if (res.status === 400 || res.status === 401) {
          console.log(`Error with status ${res.status}`);
          delToken();
          return;
        }
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}
            onClick={() => setIsExitBtn(!isExitBtn)}>
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Avatar ${auth.name}`} />
          </button>
          {isExitBtn &&
            <button onClick={handleExit}
              className={style.logout}>Выйти</button>}
        </>
      ) :
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthLogo className={style.svg}/>
        </Text>
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
