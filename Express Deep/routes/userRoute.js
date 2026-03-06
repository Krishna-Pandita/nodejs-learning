const express = require('express');
const userRouter = express.Router();

const { registeredhomes } = require('./hostRoute');

userRouter.get("/", (req, res) => {
  res.render("home", { registeredhomes , pagetitle: 'airbnb'});
});

module.exports = userRouter;