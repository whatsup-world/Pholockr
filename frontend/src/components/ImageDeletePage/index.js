// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
// import { thunkDeleteImage } from "../../store/image"
// // import { thunkGetOneImage } from "../../store/image";


// function ImageDeletePage({ image }) {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   // const { imageId } = useParams();
//   // const userId = useSelector(state => state.session.user?.id);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let deletedImage = await dispatch(thunkDeleteImage({image}));
//     // setErrors = ([]);
//     // setImageUrl("");
//     console.log("++++components image delete +++++: ", deletedImage)
//     // return newImage
//     history.push(`/images`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Confirm</button>
//     </form>
//   )

// }

// export default ImageDeletePage;
