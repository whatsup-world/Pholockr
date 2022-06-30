import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { thunkCreateImage } from "../../store/image"
import './ImageForm.css'

function ImageFormPage() {
  // const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch();

  // const sessionUser = useSelector((state) => state.session.user);
  const userId = useSelector(state => state.session.user?.id);
  // console.log(userId)
  const [imageUrl, setImageUrl] = useState("");
  const [albumId, setAlbumId] = useState("");
  // const [userId, setUserId] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
      // const newImage = { userId, imageUrl, albumId }
      setErrors([]);

      const newImage = await dispatch(thunkCreateImage({ imageUrl, userId, albumId }))
      console.log(newImage)
      return newImage
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Image Link
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      {/* <label>
        <input
          hidden={true}
          type="text"
          value={userId}
          onChange={(e) => userId(e.target.value)}
          // required
        />
      </label> */}
      <label>
        Select Album
        <input
          type="text"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
          // required
        />
      </label>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default ImageFormPage;
