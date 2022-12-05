import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const usePosts = () => {
  const [posts, setPosts] = useState('');
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best?limit=20`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.redirected) {
          return [];
        }
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({data}) => {
        data && setPosts([...data.children]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [posts];
};
