import React from 'react';
import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as AuthLogo} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [isExitBtn, setIsExitBtn] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

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
