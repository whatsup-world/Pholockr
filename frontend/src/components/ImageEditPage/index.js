import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { thunkGetAllImages, thunkGetOneImage, thunkUpdateImage } from "../../store/image";
import "./ImageEdit.css";

function ImageUpdatePage({ image, setShowEditImageForm }) {
  // const imageInfo = useSelector(state => state.image)
  // console.log("+++++++++++component imageEdit++++++++++ :", image)

  const dispatch = useDispatch();
  // const{ imageId } = useParams();
  const history = useHistory();
  const imageId = image?.id;
  // console.log(imageId)
  const userId = useSelector(state => state.session.user?.id);
  const [albumId, setAlbumId] = useState(1);
  const [imageUrl, setImageUrl] = useState(image?.imageUrl);
  // const [updatedImageUrl, setUpdatedImageUrl] = useState("");


  // useEffect(() => {
  //   dispatch(thunkGetOneImage(imageId))
  // }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // const payload = { imageUrl }
    const payload = {id: imageId, imageUrl: imageUrl, userId: userId, albumId: albumId}
    // console.log("+++++++++++component updatedImage++++++++++ :", payload)


    const res = await dispatch(thunkUpdateImage(payload));
    await dispatch(thunkGetAllImages(payload))

    if (res) {
      setShowEditImageForm(false)
    }
    // history.push(`/images/${imageId}`)
  }

  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   hideForm();
  // };

  return (
    <form onSubmit={handleSubmit}>
      {/* <img src={image.imageUrl} alt={image.id}/> */}
      <label>
        Image Url
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit" onClick={handleSubmit}>Confirm</button>
      <button type="button" onClick={(e) => setShowEditImageForm(false)}>Cancel</button>
    </form>
  );

}

export default ImageUpdatePage;
