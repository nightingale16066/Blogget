const UPDATE_COMMENT = 'UPDATE_COMMENT';

const initianalState = {
  comment: 'Hello Redux',
};

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const commentReducer = (state = initianalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment
      };
    default:
      return state;
  }
};
