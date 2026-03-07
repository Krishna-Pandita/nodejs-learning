const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views','views');

const { errorfile } = require('./controllers/errorfile');
const userRouter = require("./routes/userRoute");
const { hostRouter } = require("./routes/hostRoute");

app.use(express.static(path.join(__dirname,'public')));

app.use(userRouter);
app.use("/host", hostRouter);

app.use(errorfile);

const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});