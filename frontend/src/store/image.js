// import { csrfFetch } from "./csrf";

const GET_ALL_IMAGES = 'image/getAllImages';

const loadImages = (images) => {
  return {
    type: GET_ALL_IMAGES,
    images
  };
};


export const getAllImages = () => async (dispatch) => {
  const response = await fetch('/api/images');

  if (response.ok) {
    const data = await response.json();

    console.log("thunk data: ", data)
    dispatch(loadImages(data));
    return data;
  } else {
    return await response.json()
  }
};

const initialState = {};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_IMAGES: {
      const newState = {};
      action.images.forEach((image) => (newState[image.id] = image));
      console.log("reducer newState: ", newState)
      return newState;
    }
    default:
      return state;
  }
};


export default imagesReducer;
