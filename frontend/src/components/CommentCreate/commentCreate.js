import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { thunkCreateComment } from "../../store/comment";
import { thunkGetAllImages } from "../../store/image";


function CommentCreate({image}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [message, setMessage] = useState("");
  const userId = useSelector(state => state.session.user?.id);
  const imageId = image?.id;



  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const newComment = {message: message, imageId: imageId, userId: userId}
    await dispatch(thunkCreateComment(newComment))
    await dispatch(thunkGetAllImages())
    // console.log("++++++++component Comment Create+++++++: ", commentCreated)
    history.push(`/images/${imageId}`)
  }

  // console.log("++++++Component commentCreate: ", image)
  // console.log("++++++Component commentCreate: ", userId)
  // console.log("++++++Component commentCreate: ", imageId)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          New Comment
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Confirm</button>
      </form>
    </>
  )
};

export default CommentCreate;
