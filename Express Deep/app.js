  const express = require('express');
const path = require('path');
  const app = express();

  app.set('view engine', 'ejs');
app.set('views','views');


const userRouter = require("./routes/userRoute");
const {hostRouter} = require("./routes/hostRoute");


  // BODY PARSER MIDDLEWARE (IMPORTANT)
  app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
// app.use("/",(req,res,next)=>{
//   console.log(req.url,req.method)
// next();
// })


app.use(userRouter);
app.use("/host", hostRouter);
app.use((req,res,next)=>{
  res.status(404).render("404", { pagetitle: 'Page Not Found' });
})




  const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
});

