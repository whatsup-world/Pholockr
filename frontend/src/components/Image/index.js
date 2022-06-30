import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllImages } from '../../store/image';
import { useHistory } from 'react-router';

const ImageList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imageList = useSelector((state) => Object.values(state.images));
  // console.log("component imageList: ", imageList);

  useEffect(() => {
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  return (
    <>
      <h1>Image List</h1>
      {imageList?.map(( image ) => (
        <div key={image.id} onClick={(e) => {
          e.preventDefault();
          history.push(`/images/${image.id}`)
          }}>
          <img src={image.imageUrl} alt={image.userId} key={image.id}/>
        </div>
      ))}
    </>
  );
};

export default ImageList;
