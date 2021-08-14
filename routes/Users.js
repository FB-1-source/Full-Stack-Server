const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { validatetoken } = require("../middlewares/AuthMiddlewares");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("worked");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "User does not exist" });
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong username and password combination" });
    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.ACCESS_TOKEN
    );
    res.json(accessToken);
  });
});

router.get("/authcheck", validatetoken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
