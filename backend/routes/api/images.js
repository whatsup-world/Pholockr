const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image, Comment, User, Album } = require('../../db/models');
const image = require('../../db/models/image');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const images = await Image.findAll();
  // console.log("backend Image: ", images)
  return res.json( images );
}))

router.get('/user/:id', asyncHandler(async (req, res) => {
  const userId = req.params.id;
  // console.log(userId)
  const images = await Image.findAll({
    where: {
      userId: userId
    },
    order: [ ['id', 'DESC'] ]
  });
  // console.log("backend Image: ", images)
  return res.json( images );
}))



router.get('/:id', asyncHandler(async (req, res) => {
  const imageId = req.params.id
  const image = await Image.findByPk(imageId, {
    include: {
      model: Comment,
    }
  });
  // console.log("backend Image: ", image)
  return res.json( image );
}))


router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { imageUrl, userId, albumId } = req.body;

  const image = await Image.create({ imageUrl, userId, albumId });
  return res.json( image );
}));


router.patch('/:id', requireAuth, asyncHandler(async (req, res) => {

  const imageId = req.params.id
  const image = await Image.findByPk(imageId, {});

  const { imageUrl, albumId } = req.body;
  const updatedImage = await image.update({ imageUrl, albumId });

  return res.json( updatedImage );
}));


router.delete('/:id', asyncHandler(async (req, res) => {
  const image = await Image.findByPk(req.params.id, {
    // include: ['comments'],
    // order: [ ['id', 'DESC'] ]
  });
  image.destroy()
  // console.log("backend Image: ", images)

  return res.json( image );
}))




module.exports = router;
