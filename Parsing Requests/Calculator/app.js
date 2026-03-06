const http = require('http');

           //Creating Server
const serverCreate = http.createServer((req,res) =>{
  const url = req.url;
  const method = req.method;
  console.log(url, method);



           //Home Route
  if(url === "/" && method === "GET"){
   res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Home Page</title></head>
        <body>
          <h1>Welcome to Home page</h1>
          <a href="/calculator">Go to Calculator</a>
          </body>
          </html>
          `);
 return res.end();
  }



            //Calculator Route
  if(url === "/calculator" && method === "GET"){
   res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Calculator Page</title></head>
        <body>
        <form action="/submit" method="POST">
          <h1>Welcome to Calculator page</h1>
          <input type="number" name="first" placeholder="Enter First Number" />
          <input type="number" name="second" placeholder="Enter Second Number" />
          <button type="submit">Calculate</button>
          </form>
          </body>
          </html>
          `);
 return res.end();
  }




                 //Submit Route
    if(url === "/submit" && method === "POST"){

      const body = [];
      req.on("data",chunk =>{
        body.push(chunk);    
  })

req.on("end", () =>{
  const parsebody = Buffer.concat(body).toString();

  const params = new URLSearchParams(parsebody);
  const first = params.get("first");
  const second = params.get("second");
  const sum = Number(first) + Number(second);
  res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Calculator Page</title></head>
        <body>  

<h2>Sum of ${first} and ${second} is ${sum}</h2>
<a href="/calculator">Go Back to Calculator</a>
          </body>
          </html>
          `);
 return res.end();
    })
    return;
}




                 //404 Route (Random Route)
   res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Calculator Page</title></head>
        <body>
          <h1>404 Page Not Found</h1>
          <a href="/">Go to Home</a>  
           </body>
          </html>
          `);
 return res.end();
})



            //Console log(Server Localhost)
 serverCreate.listen(3000,() =>{
  console.log("server running at http://localhost:3000");


})