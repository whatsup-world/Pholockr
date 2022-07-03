import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { thunkDeleteImage, thunkGetAllImages, thunkGetOneImage, thunkUpdateImage } from "../../store/image";
import { thunkGetComments } from "../../store/comment";
import ImageUpdatePage from "../ImageEditPage";
import CommentCreate from "../CommentCreate/commentCreate";
// import { thunkCreateComment } from "../../store/comment";

const ImageDetail = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  const user = useSelector(state => state.session.user)
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");
  const [showEditImageForm, setShowEditImageForm] = useState(false);
  // const [updateImage, setUpdateImage] = useState(false);


  const image = useSelector(state => state?.images[imageId]);
  // console.log("+++++++++++component imageDetail+++++++: ", image);

  // const comments = useSelector(state => state?.comment)
  // console.log("+++++++++++component imageDetail+++++++: ", comments);
  // const images = useSelector(state => state.images);
  // const imageArr = Object.values(images)
  // console.log("+++++++++++component imageDetail+++++++: ", imageArr)
  // const image = imageArr?.imageId

  useEffect(() => {
    // dispatch(thunkGetOneImage(imageId));
    dispatch(thunkGetComments())
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  const deleteImage = async e => {
    e.preventDefault();
    await dispatch(thunkDeleteImage(imageId));
    history.push('/images')
  }

  // const deleteComment = async e => {
  //   e.preventDefault();
  //   await dispatch(thunkDeleteComment(imageId));
  //   history.push('/images')
  // }

  // console.log("+++++++++++component imageDetail+++++++: ", image);

  const updateImage = (e) => {
    setShowEditImageForm(true)
  }

  return (
      <>
        <div id="image-container">
          <h1>Image Detail</h1>
          <img src={image?.imageUrl} key={imageId} alt="image"/>
            {user?.id === image?.userId && <button onClick={updateImage}>Edit Image</button>}
            {/* {user?.id === image?.userId && <button onClick={() => setShowEditImageForm(true)}>Edit Image</button>} */}
            {/* {user?.id === image?.userId && <button>Edit Image</button>} */}

            {
              showEditImageForm &&
              <div id="image-update-component">
                <ImageUpdatePage
                  image={image}
                  // hideForm={() => setShowEditImageForm(false)}
                  setShowEditImageForm={setShowEditImageForm}
                />
              </div>
            }

            {user?.id === image?.userId && <button onClick={deleteImage}>Delete Image</button>}
          <div id="comment-component">
            <div>
              {
                image?.Comments?.map(comment => <div key={comment.id}>{comment.userId} {comment.message}</div>)
              }
            </div>
          </div>

          <div id="create-comment-component">
            <CommentCreate image={image}/>
          </div>




        </div>
      </>
  );


}

export default ImageDetail;
