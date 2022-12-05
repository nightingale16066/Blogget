import React from 'react';
import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as AuthLogo} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import AuthLoader from '../../../UI/Loader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [isExitBtn, setIsExitBtn] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const handleExit = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (<AuthLoader/>) : auth.name ? (
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
