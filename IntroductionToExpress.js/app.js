
const express = require('express')

 const userrequesthandler = require("./one")

 const app = express();

 app.use('/',(req,res,next) =>{
  console.log("came in first middleware ",req.url,req.method);
  // res.send("<p>Hello from Home Body!</p>")
  next();
 })

  app.use('/submit',(req,res,next) =>{
  console.log("came in second middleware ",req.url,req.method);
res.send("<p>Hello from ExpressJS!</p>")
 })

  const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
});


