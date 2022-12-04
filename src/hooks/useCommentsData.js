import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = id => {
  const [commentsData, setCommentsData] = useState([]);
  const {token} = useContext(tokenContext);


  useEffect(() => {
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error(`Error with status ${res.status}`);
        }
        return res.json();
      })
      .then(([
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ]) => {
        const comments = children.map(item => item.data);
        setCommentsData([post, comments]);
      }
      )
      .catch(err => {
        console.err(err);
      });
  }, []);


  return [commentsData];
};
