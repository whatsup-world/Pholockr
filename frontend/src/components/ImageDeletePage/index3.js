// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from "react";
// import { NavLink, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';
// import { getImage, getUserImages, deleteImage, editImage } from '../../store/images';
// import './singleImagePage.css'


// const SingleImagePage = () => {

//     const history = useHistory();
//     const dispatch = useDispatch();

//     const { imageId } = useParams();


//     const image = useSelector(state => state.image[imageId]);
//     const user = useSelector(state => state.session.user);

//     const [content, setContent] = useState('');
//     const updateContent = (e) => setContent(e.target.value);

//     useEffect(() => {
//         dispatch(getImage(imageId));
//     }, [dispatch, imageId])


//     const removeImage = (e) => {
//         e.preventDefault();

//         dispatch(deleteImage(imageId)).then(() => dispatch(getUserImages(user.id)));
//         history.push('/');
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const payload = {
//             content,
//         };
//         //
//         dispatch(editImage(payload, imageId))

//         // .then(() => dispatch(getUserImages(user.Id)))

//         if (image) history.push(`/`)
//     };


//     return (
//         <div>
//             <div className='UserBackground-1'> </div>
//             <div className='UserBackground-2'></div>
//             <div className='imgContainer2'>
//                 <div>
//                     <h1 className='singleImageContent'>{image?.content}</h1>
//                     <div className='singeImageContainer'>
//                         {/* <NavLink to={`/image/${image.id}`}> */}
//                         <img src={image?.imageUrl} alt="image" className='singlehomeImg'></img>
//                         {/* </NavLink> */}

//                     </div>
//                     <div className='buttonContainer'>
//                         <NavLink to='/'> <button className='back'>Back</button> </NavLink>
//                         <button onClick={removeImage} className='delete'>Delete</button>
//                     </div>
//                     <div className='editForm'>
//                         <form onSubmit={handleSubmit} className='form'>
//                             {/* <NavLink to={`/image/${image?.id}/edit`}> */}
//                             <input
//                                 className='editInput'
//                                 type="text"
//                                 placeholder="Content"
//                                 value={content}
//                                 onChange={updateContent}>
//                             </input>
//                             <button type="submit" className='edit'>Edit</button>
//                             {/* </NavLink> */}
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }


// export default SingleImagePage;
