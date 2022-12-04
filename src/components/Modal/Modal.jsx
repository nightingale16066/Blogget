import React from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useRef, useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';

export const Modal = ({id, closeModal}) => {
  const [[post, comments]] = useCommentsData(id);

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handleEscapeBtn = e => {
    e.keyCode === 27 && closeModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeBtn);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscapeBtn);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {
          !(post && comments) ? <p>Загрузка...</p> :
          <>
            <h2 className={style.title}>{post.title}</h2>
            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    }
                  }
                }
              }}>
                {post.selftext}
              </Markdown>
            </div>
            <div className={style.author}>{post.author}</div>
            <FormComment/>
            <Comments comments={comments}/>
          </>
        }

        <button className={style.close} onClick={() => closeModal()}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};

