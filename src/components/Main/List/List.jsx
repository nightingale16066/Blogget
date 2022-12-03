import React, {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const {posts} = useContext(postsContext);
  console.log('posts: ', posts);

  return (
    <ul className={style.list}>
      {posts && posts.map((post) => (
        <Post key={post.data.id} postData={post.data}/>
      ))}
    </ul>
  );
};
