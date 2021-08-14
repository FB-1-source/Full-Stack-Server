const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validatetoken } = require("../middlewares/AuthMiddlewares");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});

router.post("/", validatetoken, async (req, res) => {
  const username = req.user.username;
  const comment = req.body;
  comment.username = username;
  const newComm = await Comments.create(comment);
  res.json(newComm);
});

router.delete("/:commentId", validatetoken, async (req, res) => {
  const commentId = req.params.commentId;

  await Comments.destroy({
    where: {
      id: commentId,
    },
  });
  res.json("Deleted");
});

module.exports = router;
