  const express = require('express');

  const app = express();

  
app.use("/",(req,res,next)=>{
  console.log("came in first middleware",req.url,req.method)
next();
})

app.use("/",(req,res,next)=>{
  console.log("came in second middleware",req.url,req.method)
next();
})

// app.use("/",(req,res,next)=>{
//   console.log("came in third middleware",req.url,req.method)
//   res.send("<p>welcome to third middleware</p>")
// next();
// })

app.get("/",(req,res,next)=>{
  console.log("handling first get method",req.url,req.method)
  res.send("<p>welcome to coding</p>")
next();
})


app.get("/contact-us", (req, res, next) => {
  console.log("handling contact-us method", req.url, req.method);

  res.send(`
    <html>
      <head>
        <title>Contact Us</title>
      </head>
      <body>
        <p>Please give your details...</p>
        <form action="/contact-us" method="POST">
          <input type="text" name="name" placeholder="Enter Your Name"><br><br>
          <input type="email" name="email" placeholder="Enter Your Email"><br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});



app.post("/contact-us",(req,res,next)=>{
  console.log("handling form post method",req.url,req.method)
  res.send("<p>Thank You for sharing Your Details!</p>")
next();
})


  const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
});

