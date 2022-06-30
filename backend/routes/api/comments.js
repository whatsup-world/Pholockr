const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image, Comment, User, Album } = require('../../db/models');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const router = express.Router();

router.get('/images/:id', asyncHandler(async (req, res) => {
  const imageId = req.params.id;
  const comments = await Comment.findAll({
    where: {
      imageId: imageId
    },
    order: [[ 'createdAt', 'DESC' ]],
    include: User
  });
  // console.log("backend comment: ", comments)
  return res.json( comments );
}));


router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { userId, imageId, message } = req.body;

  const comment = await Comment.create({ userId, imageId, message });
  return res.json( comment );
}));


router.put('/:id', requireAuth, asyncHandler(async (req, res) => {

  const commentId = req.params.id
  const comment = await Comment.findByPk(commentId, {});

  const { userId, imageId, message } = req.body;
  const updatedComment = await comment.update({ userId, imageId, message });

  return res.json( updatedComment );
}));


router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  comment.destroy()

  return res.json( comment );
}))


module.exports = router;
