import {useState, useEffect} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      console.log('location.pathname: ', location.href);
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    localStorage.removeItem('bearer');
    location.href = location.href.replace(/\/auth.*/, '');
  };

  return [token, delToken];
};
