// import { csrfFetch } from './csrf';

// const LOAD_Images = 'images/loadImages'
// const LOAD_Image = 'images/loadImage'
// const Add_Image = 'images/addImage'
// const EDIT_Image = 'images/editImage'

// // Load all images
// const loadImages = (images, userId) => {
//     return {
//         type: LOAD_Images,
//         payload: images,
//         userId
//     }
// }

// //GET ALL IMAGES OF A SPECIFIC USER
// export const getUserImages = (userId) => async (dispatch) => {
//     const res = await fetch(`/api/images/${userId}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     });
//     const images = await res.json();
//     dispatch(loadImages(images, userId))
// }



// // GET ALL IMAGES (thunk)
// export const getImages = () => async (dispatch) => {
//     const response = await fetch('/api/images', {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     });

//     const images = await response.json();
//     dispatch(loadImages(images))
// }


// // CREATE A NEW IMAGE
// const addImage = (image) => {
//     console.log("image in object:", image)
//     return {
//         type: Add_Image,
//         payload: image,
//     }
// }

// // UPLOAD A NEW IMAGE (thunk)
// export const createImage = (newImage) => async dispatch => {

//     const res = await csrfFetch('/api/images', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newImage),
//     });

//     if (res.ok) {
//         const image = await res.json();

//         console.log("*******images in thunk:", image)
//         dispatch(addImage(image))
//         return image;
//     }
// }


// // GET A SINGLE IMAGE
// const loadImage = (image) => {
//     return {
//         type: LOAD_Image,
//         payload: image,
//     }
// }

// // GET A SINGLE IMAGE OF AN ID (thunk)
// export const getImage = (imageId) => async (dispatch) => {
//     const res = await fetch(`/api/images/image/${imageId}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     });

//     const image = await res.json();
//     dispatch(loadImage(image))
// }

// //DELETE A SPECIFIC IMAGE (thunk)
// export const deleteImage = (imageId) => async dispatch => {
//     const res = await csrfFetch(`/api/images/image/${imageId}/delete`, {
//         method: 'DELETE',
//     });

//     const image = await res.json();
//     // dispatch(removeImage(image.id))
//     return image;

// }

// // UPDATE AN IMAGE
// const update = (imageId) => ({
//     type: EDIT_Image,
//     payload: imageId,
// });

// //EDIT AN IMAGE (thunk)
// export const editImage = (payload, imageId) => async dispatch => {
//     const res = await csrfFetch(`/api/images/image/${imageId}/edit`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//     });

//     const image = await res.json();
//     dispatch(update(image));
//     return image;
// }



// // ---------------------- Reducer --------------------------------

// const initialState = {};

// const imagesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD_Images:
//             // return { ...state, images: action.payload.image }
//             console.log("payload;",action.payload.image)
//             const banana = {}
//             for(let image of action.payload.image){
//             // action.payload.forEach((image) => {
//                 banana[image.id] = image
//             };

//             return {...banana};
//         case LOAD_Image:
//             return { ...state, [action.payload.image.id]: action.payload.image }
//         case Add_Image:
//             const newState = {
//                 ...state, list: { ...state.images, test1: action.payload }
//             }
//             return newState;
//         case EDIT_Image: {
//             return {
//                 ...state,
//                 test2: action.payload,
//             };
//         }
//         default:
//             return state;
//     }
// }


// export default imagesReducer;
