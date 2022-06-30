import { csrfFetch } from "./csrf";

// define types
const GET_ALL_IMAGES = 'image/getAllImages';
// const GET_ONE_IMAGE = 'image/getOneImage';
const CREATE_IMAGE = 'image/createImage';
const DELETE_IMAGE = 'image/deleteImage';

// define actions
const loadImages = (images) => {
  return {
    type: GET_ALL_IMAGES,
    images
  };
};

// const loadImage = (images) => {
//   return {
//     type: GET_ONE_IMAGE,
//     image
//   };
// };

const createImage = (image) => {
  return {
    type: CREATE_IMAGE,
    image
  };
};

const deleteImage = (image) => {
  return {
    type: DELETE_IMAGE,
    image
  };
};

// define thunks
export const thunkGetAllImages = () => async (dispatch) => {
  const response = await fetch('/api/images');

  if (response.ok) {
    const data = await response.json();

    console.log("++++++++++++++++thunk data++++++++++++++++: ", data)
    dispatch(loadImages(data));
    // return data;
  }
};

// export const getOneImage = (imageId) => async (dispatch) => {
//   const response = await fetch(`/api/images/${imageId}`);

//   if (response.ok) {
//     const data = await response.json();

//     // console.log("thunk data: ", data)
//     dispatch(loadImage(data));
//     return data;
//   } else {
//     return await response.json()
//   }
// };

export const thunkCreateImage = (data) => async (dispatch) => {
  const response = await csrfFetch('/api/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const data = await response.json();
    console.log("++++++++++thunk data++++++++++++++: ", data)
    dispatch(createImage(data));
    return data;
  }
};

export const thunkDeleteImage = (image) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${image.id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const image = await response.json();
    // console.log("thunk data: ", data)
    dispatch(deleteImage(image));
    return image;
  }
};


// define reducer
const initialState = {};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_IMAGES: {
      const newState = { ...state };
      action.images.forEach((image) => (newState[image.id] = image));
      console.log("+++++++++reducer newState+++++++++++++: ", newState)
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
    case DELETE_IMAGE: {
      const newState = {
        ...state,
        [action.image.id]: action.image
      };
      // console.log(newState)
      delete newState[action.image.id];
      return newState
    };

    default:
      return state;
  }
};


export default imagesReducer;
