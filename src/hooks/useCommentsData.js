import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentRequestAsync} from '../store/comment/commentAction';

export const useCommentsData = id => {
  const post = useSelector(state => state.comment.post);
  const comments = useSelector(state => state.comment.comments);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(commentRequestAsync(id));
  }, [token]);


  return [post, comments];
};
