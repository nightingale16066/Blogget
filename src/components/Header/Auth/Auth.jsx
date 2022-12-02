import React from 'react';
import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthLogo} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useAuth(token);
  const [isExitBtn, setIsExitBtn] = useState(false);

  const handleExit = () => {
    delToken();
    clearAuth();
  };

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
