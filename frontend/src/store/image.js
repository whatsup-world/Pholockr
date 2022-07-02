import { csrfFetch } from "./csrf";

// define types
const GET_ALL_IMAGES = 'image/GET_ALL_IMAGES';
const GET_ONE_IMAGE = 'image/GET_ONE_IMAGE';
const CREATE_IMAGE = 'image/CREATE_IMAGE';
const UPDATE_IMAGE = 'image/UPDATE_IMAGE';
const DELETE_IMAGE = 'image/DELETE_IMAGE';

// define actions
const loadImages = (images) => {
  return {
    type: GET_ALL_IMAGES,
    images
  };
};

const getOneImage = (image) => {
  return {
    type: GET_ONE_IMAGE,
    image
  };
};

const createImage = (image) => {
  return {
    type: CREATE_IMAGE,
    image
  };
};

const updateImage = (image) => {
  return {
    type: UPDATE_IMAGE,
    image
  };
};

const deleteImage = (imageId) => {
  return {
    type: DELETE_IMAGE,
    imageId
  };
};

// define thunks
export const thunkGetAllImages = () => async (dispatch) => {
  const response = await csrfFetch('/api/images');

  if (response.ok) {
    const data = await response.json();

    // console.log("++++++++++++++++thunk data++++++++++++++++: ", data)
    dispatch(loadImages(data));
    return data;
  }
};

export const thunkGetOneImage = (imageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${imageId}`);

  if (response.ok) {
    const data = await response.json();

    // console.log("thunk data: ", data)
    dispatch(getOneImage(data));
    // console.log("++++++++++++++++thunk data++++++++++++++++: ", data)
    return data;
  }
};


export const thunkCreateImage = (image) => async (dispatch) => {
  const response = await csrfFetch('/api/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  });

  if (response.ok) {
    const data = await response.json();
    // console.log("++++++++++thunk data++++++++++++++: ", data)
    dispatch(createImage(data));
    return data;
  }
};


export const thunkUpdateImage = (payload) => async (dispatch) => {
    // console.log("++++++++++thunk data++++++++++++++: ", imageId, userId, albumId)

  const response = await csrfFetch(`/api/images/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const image = await response.json();
    console.log("+++++++++thunk image++++++++: ", image)
    dispatch(updateImage(image));
    return image;
  }
};


export const thunkDeleteImage = (imageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${imageId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    // const image = await response.json();
    // console.log("thunk data: ", data)
    dispatch(deleteImage(imageId));
    // return image;
  }
};


// define reducer
// const initialState = {};

const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_IMAGES: {
      const newState = { ...state };
      action.images.forEach((image) => (newState[image.id] = image));
      // console.log("+++++++++reducer newState+++++++++++++: ", newState)
      return newState;
    };

    case GET_ONE_IMAGE: {
      const newState = { ...state,
        [action.image.id]: action.image
      };
      // action.image.forEach((image) => (newState[image.id] = image));
      // console.log("+++++++++reducer newState+++++++++++++: ", newState)
      return newState;
    };

    case CREATE_IMAGE: {
      const newState = {
        ...state,
        [action.image.id]: action.image
      };
      // console.log(newState)
      return newState
    };


    case UPDATE_IMAGE: {
      const newState = {
        ...state,
        [action.image.id]: action.image
        // apple: action.imageId
      };
      // console.log(newState)
      return newState
    };


    case DELETE_IMAGE: {
      const newState = {...state};
      // console.log(newState)
      delete newState[action.imageId];
      return newState
    };

    default:
      return state;
  }
};


export default imagesReducer;
