import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { thunkDeleteImage, thunkGetAllImages, thunkGetOneImage, thunkUpdateImage } from "../../store/image";
import { ImageDeletePage } from "../ImageDeletePage";
import ImageUpdatePage from "../ImageEditPage";


const ImageDetail = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  const user = useSelector(state => state.session.user)
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");
  const [showEditImageForm, setShowEditImageForm] = useState(false);
  const [updatedImageUrl, setUpdatedImageUrl] = useState("");


  // console.log("+++++++++++component imageDetail+++++++: ", user);
  const image = useSelector(state => state?.images[imageId]);

  // const images = useSelector(state => state.images);
  // const imageArr = Object.values(images)
  // console.log("+++++++++++component imageDetail+++++++: ", imageArr)
  // const image = imageArr?.imageId

  useEffect(() => {
    // dispatch(thunkGetOneImage(imageId));
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  const deleteImage = async e => {
    e.preventDefault();
    await dispatch(thunkDeleteImage(imageId));
    history.push('/images')
  }

  // const editImage = async e => {
  //   await dispatch(thunkUpdateImage(imageId));
  //   history.push(`/images/${imageId}`)
  // }


  // console.log("+++++++++++component imageDetail+++++++: ", image);

  return (
      <>
        <div id="image-container">
          <h1>Image Detail</h1>
          <img src={image?.imageUrl} alt="image"/>
            {/* {user?.id === image?.userId && <button onClick={history.push('/editimage')}>Edit Image</button>} */}
            {/* {user?.id === image?.userId && <button onClick={document.getElementById("image-edit-form").hidden.value = false}>Edit Image</button>} */}
            {user?.id === image?.userId && <button onClick={() => setShowEditImageForm(true)}>Edit Image</button>}



            <div id="image-update-component">
              <ImageUpdatePage
                image={image}
                hideForm={() => setShowEditImageForm(false)}
              />
            </div>


            {/* <form hideForm={() => setShowEditImageForm(true)} id="image-edit-form">
              <label>
                Image Url
                <input
                  type='text'
                  value={image.imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Confirm</button>
            </form> */}

            {user?.id === image?.userId && <button onClick={deleteImage}>Delete Image</button>}
          <div id="comment-component">
            <div>
              {
                image?.Comments?.map(comment => <div key={comment.id}>{comment.message}</div>)
              }
            </div>
          </div>
        </div>
      </>
  );


}

export default ImageDetail;
