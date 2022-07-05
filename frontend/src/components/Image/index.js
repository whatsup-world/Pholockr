import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllImages } from '../../store/image';
import { useHistory } from 'react-router';
import "./Image.css";


const ImageList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imageList = useSelector((state) => Object.values(state.images));
  // console.log("component imageList: ", imageList);

  useEffect(() => {
    dispatch(thunkGetAllImages());
  }, [dispatch]);

  return (
    <div className='images-page'>
      <h1>Images</h1>
      <div className='images-list'>
        {imageList?.map(( image ) => (
        <div key={image.id} onClick={(e) => {
          e.preventDefault();
          history.push(`/images/${image.id}`)
          }}>
          <img src={image.imageUrl} alt={image.userId} key={image.id}/>
        </div>
      ))}
      </div>

    </div>
  );
};

export default ImageList;
