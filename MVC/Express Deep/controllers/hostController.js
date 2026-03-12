

const registeredhomes = [];
const Home = require('../models/home');

exports.getAddHome = (req,res,next)=>{
  // console.log("Register Your Home Here")
  res.render('host/add-home',{pagetitle: 'Add Home'})
}


exports.gethosthomes = (req, res, next) => {
    Home.fetchAll((registeredhomes) => {
        // This looks for views/store/homelist.ejs
        res.render("host/host-homelist", { 
            registeredhomes: registeredhomes, 
            pagetitle: 'Host Home List' 
        });
    });
};



exports.postaddhome = (req, res) => {
  // registeredhomes.push({ HomeName: req.body.HomeName});
  console.log("Updated Homes:", registeredhomes);

  const {HomeName, Location, price, rating, photoURL} = req.body;
  const home = new Home(HomeName, Location, price, rating, photoURL);home.save();
  res.render('host/home-added',{pagetitle: 'Home Registered'}
  )}




