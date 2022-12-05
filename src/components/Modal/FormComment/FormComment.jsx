import React from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef} from 'react';
import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [auth] = useAuth();
  const userComment = useRef(null);

  useEffect(() => {
    isFormOpen && userComment.current.focus();
  }, [isFormOpen]);


  const handleSend = (e) => {
    e.preventDefault();
    if (!value) return;

    console.log(value);
    setIsFormOpen(false);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  return (
    isFormOpen ?
      <form className={style.form}>
        <Text As='h3' size={14} tsize={18}>
          {auth.name}
        </Text>
        <textarea className={style.textarea} value={value}
          ref={userComment} onChange={handleChange}></textarea>
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
