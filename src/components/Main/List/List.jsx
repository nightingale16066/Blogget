import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nikname1',
      ups: 77,
      date: '2022-01-21T03:22:00.000Z',
      id: '214'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nikname2',
      ups: 24,
      date: '2022-01-31T00:00:00.000Z',
      id: '32'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nikname3',
      ups: 58,
      date: '2022-02-24T04:45:00.000Z',
      id: '1532'
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nikname4',
      ups: 123,
      date: '2022-03-10T08:25:00.000Z',
      id: '645'
    }
  ];
  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}
    </ul>
  );
};
