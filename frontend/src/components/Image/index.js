import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllImages } from '../../store/image';

const ImageList = () => {
  const dispatch = useDispatch();
  const imageList = useSelector((state) => Object.values(state.images));
  // console.log("component imageList: ", imageList);

  useEffect(() => {
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  return (
    <>
      <h1>Image List</h1>
      {imageList?.map(( image ) => (

          <img src={image.imageUrl} alt={image.userId} key={image.id}/>

      ))}
    </>
  );
};

export default ImageList;
