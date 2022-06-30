import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comment/GET_COMMENTS';
const CREATE_COMMENT = 'comment/CREATE_COMMENT';
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';


const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments
  };
};

const createComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment
  };
};

const updateComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment
  };
};

const deleteComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment
  };
};


export const thunkGetComments = () => async (dispatch) => {
  const response = await csrfFetch('/api/comments');

  if (response.ok) {
    const comments = await response.json();

    // console.log("++++++++++++++++thunk data++++++++++++++++: ", data)
    dispatch(getComments(comments));
    return comments;
  }
};


export const thunkCreateComment = (comment) => async (dispatch) => {
  const response = await csrfFetch('/api/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment)
  });

  if (response.ok) {
    const newComment = await response.json();

    // console.log("++++++++++++++++thunk data++++++++++++++++: ", data)
    dispatch(createComment(newComment));
    return newComment;
  }
};


export const thunkUpdateComment = (comment) => async (dispatch) => {
  const response = await csrfFetch('/api/images', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment)
  });

  if (response.ok) {
    const updatedComment = await response.json();

    // console.log("++++++++++++++++thunk data++++++++++++++++: ", updatedComment)
    dispatch(updateComment(updatedComment));
    return updatedComment;
  }
};


export const thunkDeleteComment = (comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${comment.id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const comment = await response.json();
    // console.log("thunk data: ", data)
    dispatch(deleteComment(comment));
    return comment;
  }
};


const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS: {
      const newState = { ...state };
      action.comments.forEach(comment => {newState[comment.id] = comment});
      // console.log("+++++++++reducer newState+++++++++++++: ", newState)

      return newState
    };
    // case CREATE_COMMENT: {

    // };
    // case UPDATE_COMMENT: {

    // };
    // case DELETE_COMMENT: {

    // };

    default:
      return state;
  }
}

export default commentsReducer;
