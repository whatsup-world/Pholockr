import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { thunkGetAllImages } from "../../store/image";


const ImageDetail = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  // console.log("+++++++++++component imageDetail+++++++: ", state);

  const image = useSelector(state => state.images[imageId]);
  // const [ showEditForm, setShowEditForm ] = useState(false);
  // const [ showDeleteForm, setShowDeleteForm ] = useState(false);

  useEffect(() => {
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  console.log("+++++++++++component imageDetail+++++++: ", image);


  return (
    <div id="image-container">
      <>
        <h1>Image Detail</h1>
        <img src={image.imageUrl} alt={image.userId}/>
      </>
    </div>
  );


}

export default ImageDetail;
