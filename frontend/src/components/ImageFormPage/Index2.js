// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { createImage } from '../../store/images';
// import { useHistory } from 'react-router-dom';
// import { getUserImages, getImages } from '../../store/images';
// import { useEffect } from 'react';
// import * as sessionActions from "../../store/session";
// import './CreateImage.css';

// const CreateImage = () => {
//     const [isLoaded, setIsLoaded] = useState(false)
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//     }, [dispatch]);

//     useEffect(() => {
//         dispatch(getImages());
//     }, [dispatch])


//     const userId = useSelector(state => state.session.user?.id);

//     const history = useHistory();
//     //
//     const image = useSelector(state => state.image.images);


//     const [content, setContent] = useState('');
//     const [imageUrl, setImageUrl] = useState('');

//     const [errors, setErrors] = useState([]);


//     useEffect(() => {
//         const errors = [];
//         if (content.length < 1) errors.push('Please provide valid values');
//         if (imageUrl.length < 10) {
//             errors.push('Please provide valid url')
//         }
//         setErrors(errors);
//     }, [content, imageUrl])

//     const updateContent = (e) => setContent(e.target.value);
//     const updateImageUrl = (e) => setImageUrl(e.target.value);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const payload = {
//             userId,
//             content,
//             imageUrl,
//         };
//         //
//         const post = await dispatch(createImage(payload))
//         console.log('post:', post)
//         // .then(() => dispatch(getUserImages(userId)))
//         if (post) history.push(`/image/${post.id}`)
//         // if (post) history.push('/')
//     };

//     // return (
//     //     <>
//     //         {userId && (
//     //             <div className='uploadContainer'>
//     //                 <form onSubmit={handleSubmit}>
//     //                     <div className='uploadForm'>
