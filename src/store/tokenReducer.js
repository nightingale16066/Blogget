import {setToken, delToken} from '../api/useToken';

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const initianalState = {
  token: '',
};

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
});

export const tokenMiddleware = store => next => (action) => {
  if (action.type === 'UPDATE_TOKEN') {
    setToken(action.token);
  }
  if (action.type === 'DELETE_TOKEN') {
    delToken();
  }
  next(action);
};

export const tokenReducer = (state = initianalState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token
      };
    case DELETE_TOKEN:
      delToken();
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
