exports.errorfile = (req, res, next) => {
    // Ensure 404.ejs is directly inside the 'views' folder
    res.status(404).render('404', { pagetitle: 'Page Not Found' });
};