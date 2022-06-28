const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const images = await Image.findAll();
  // console.log("backend Image: ", images)
  return res.json( images );
}))



router.post('/', asyncHandler(async (req, res) => {
  const { imageUrl } = req.body;
  const image = await Image.create({ imageUrl });

  return res.json( image );
}));

module.exports = router;
