import React from 'react';
import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import PostsLoader from '../../../UI/Loader';

export const List = () => {
  const [posts, loading] = usePosts();

  return (
    loading ?
      <div className={style.wrapper}>
        <PostsLoader/>
      </div> :
      <ul className={style.list}>
        {posts && posts.map((post) => (
          <Post key={post.data.id} postData={post.data}/>
        ))}
      </ul>
  );
};
