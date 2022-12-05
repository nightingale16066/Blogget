import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const';
import {deleteToken} from '../store/index';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => {
        if (res.status === 400 || res.status === 401) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.err(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
