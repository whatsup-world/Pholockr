import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { thunkCreateComment } from "../../store/comment";
import { thunkGetAllImages } from "../../store/image";
import "./CommentCreate.css";

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

  return (
    <form onSubmit={handleSubmit}>
        <label>
          <div id="new-comment-component">
            <p>New Comment</p>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" onClick={handleSubmit}>Confirm</button>
          </div>
        </label>
      </form>
  )
};

export default CommentCreate;
