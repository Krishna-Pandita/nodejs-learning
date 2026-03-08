const express = require('express');
const path = require('path');
const app = express();

// 1. Settings & Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 2. Routes
const storeroute = require("./routes/storeroute");
const { hostRouter } = require("./routes/hostRoute");
const { errorfile } = require('./controllers/errorfile');

app.use(storeroute);        // Handles / and /bookings
app.use("/host", hostRouter); // Handles /host/add-home

// 3. 404 Catch-all (MUST BE LAST)
app.use(errorfile);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});