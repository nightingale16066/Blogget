import React from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef} from 'react';
import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {useEffect} from 'react';

export const FormComment = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [auth] = useAuth();
  const userComment = useRef(null);

  useEffect(() => {
    isFormOpen && userComment.current.focus();
  }, [isFormOpen]);


  const handleSend = (e) => {
    e.preventDefault();
    if (!userComment.current.value) return;

    console.log(userComment.current.value);
    setIsFormOpen(false);
  };
  return (
    isFormOpen ?
      <form className={style.form}>
        <Text As='h3' size={14} tsize={18}>
          {auth.name}
        </Text>
        <textarea className={style.textarea}
          ref={userComment}></textarea>
        <button className={style.btn}
          onClick={handleSend}>
          Отправить
        </button>
      </form> :
      <button className={style.btn} onClick={() => setIsFormOpen(true)}>
        Написать комментарий
      </button>
  );
};
