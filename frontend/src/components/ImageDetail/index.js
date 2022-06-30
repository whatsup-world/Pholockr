import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { thunkDeleteImage, thunkGetAllImages, thunkGetOneImage } from "../../store/image";
import { ImageDeletePage } from "../ImageDeletePage";


const ImageDetail = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  const user = useSelector(state => state.session.user)
  const history = useHistory();
  // console.log("+++++++++++component imageDetail+++++++: ", user);
  const image = useSelector(state => state.images[imageId]);

  useEffect(() => {
    // dispatch(thunkGetOneImage(imageId));
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  const deleteImage = async e => {
    await dispatch(thunkDeleteImage(imageId));
    history.push('/images')
  }

  console.log("+++++++++++component imageDetail+++++++: ", imageId);

  return (
      <>
        <div id="image-container">
          <h1>Image Detail</h1>
          <img src={image?.imageUrl} alt="image"/>
            {user?.id === image?.userId && <button>Edit Image</button>}
            {/* {user?.id === image?.userId && <button onClick={history.push(`/images/${imageId}`)}>Delete Image</button>} */}
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
