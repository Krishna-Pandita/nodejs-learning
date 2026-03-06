const express = require('express');
const path = require('path');
  const hostRouter = express.Router();
  // app.use(express.urlencoded({ extended: true }));



  const registeredhomes = [];


hostRouter.get("/add-home",(req,res,next)=>{
  console.log("Register Your Home Here")
  res.render('add-home',{pagetitle: 'Add Home'})
})

hostRouter.post("/add-home", (req, res) => {

  registeredhomes.push({ HomeName: req.body.HomeName});

  console.log("Updated Homes:", registeredhomes);

  res.render('home-added',{pagetitle: 'Home Registered'})});

module.exports = {
  hostRouter,
  registeredhomes
};