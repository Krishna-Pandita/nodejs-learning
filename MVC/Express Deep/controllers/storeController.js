const Home = require('../models/home');

exports.gethomes = (req, res, next) => {
    Home.fetchAll((registeredhomes) => {
        // This looks for views/store/homelist.ejs
        res.render("store/homelist", { 
            registeredhomes: registeredhomes, 
            pagetitle: 'Home List' 
        });
    });
};



exports.getindex = (req, res, next) => {
    Home.fetchAll((registeredhomes) => {
        // This looks for views/store/homelist.ejs
        res.render("store/index", { 
            registeredhomes: registeredhomes, 
            pagetitle: 'airbnb' 
        });
    });
};





exports.getBookings = (req, res, next) => {
    Home.fetchAll((registeredhomes) => {
        // This looks for views/store/bookings.ejs
        res.render("store/bookings", { 
            registeredhomes: registeredhomes, 
            pagetitle: 'airbnb' 
        });
    });
};


exports.getfavourites = (req, res, next) => {

    Home.fetchAll((registeredhomes) => {
        // This looks for views/store/homelist.ejs
        res.render("store/favourite-list", { 
            registeredhomes: registeredhomes, 
            pagetitle: 'airbnb' 
        });
    });
};


exports.gethomedetails = (req, res, next) => {
    const homeId = req.params.homeId;

Home.findById(homeId, home=>{

    if(!home){
        console.log("Home not Found");
       return res.redirect("/homes");
    }
    // console.log("home Details found ",home);
  else{
    res.render("store/home-details", {
        home: home,
        pagetitle: 'Home Details'

    });
}
})
}
