import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllImages } from '../../store/image';

const ImageList = () => {
  const dispatch = useDispatch();
  const imageList = useSelector((state) => Object.values(state.images));
  // console.log("component imageList: ", imageList);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  return (
    <>
      <h1>Image List</h1>
      {imageList?.map(( ele ) => (

          <img src={ele.imageUrl} alt={ele.userId} key={ele.id}/>

      ))}
    </>
  );
};

export default ImageList;