import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { thunkCreateImage } from "../../store/image"
import './ImageForm.css'

function ImageFormPage() {
  // const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  // const sessionUser = useSelector((state) => state.session.user);
  const userId = useSelector(state => state.session.user?.id);
  // console.log(userId)
  const [imageUrl, setImageUrl] = useState("");
  const [albumId, setAlbumId] = useState(1);
  // const [userId, setUserId] = useState("");
  // const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
      // const payload = { userId, imageUrl, albumId }

      let newImage = await dispatch(thunkCreateImage({imageUrl, userId, albumId}));
      // setErrors = ([]);
      // setImageUrl("");
      // console.log(newImage)
      // return newImage
      history.push(`/images/${newImage.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul> */}
      <label>
        Image Link
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>

      <label hidden={true}>
        Select Album
        <input
          type="text"
          value={albumId}
          onChange={(e) => setAlbumId(1)}
        />
      </label>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default ImageFormPage;
