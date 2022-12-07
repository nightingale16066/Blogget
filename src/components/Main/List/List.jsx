import React from 'react';
import style from './List.module.css';
import Post from './Post';
import PostsLoader from '../../../UI/Loader';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postAction';
import {Outlet, useParams} from 'react-router-dom';
import {postsSlice} from '../../../store/posts/postSlice';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const count = useSelector(state => state.posts.count);
  const endlist = useRef(null);
  const {page} = useParams();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(postsRequestAsync());
  };

  useEffect(() => {
    dispatch(postsSlice.actions.changePage({page}));
    dispatch(postsRequestAsync());
  }, [page]);

  useEffect(() => {
    if (count >= 2 && posts) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '150px',
    });

    observer.observe(endlist.current);

    return () => {
      if (endlist.current) {
        observer.unobserve(endlist.current);
      }
    };
  }, [endlist.current]);

  return (
    <>
      <ul className={style.list}>
        {posts && posts.map((post) => (
          <Post key={post.data.id} postData={post.data}/>
        ))}
        {count >= 2 && !loading ?
          <button className={style.btn} onClick={handleClick}>
            load more
          </button> :
          <li ref={endlist} className={style.end}/>}
        {loading ?
          <div className={style.wrapper}>
            <PostsLoader/>
          </div> : <></>
        }
      </ul>
      <Outlet/>
    </>
  );
};
