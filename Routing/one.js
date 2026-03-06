const http = require('http');

const server = http.createServer((req,res)=>{
  const url = req.url;
  const method = req.method;

  console.log(`Url: ${url}`, `Method: ${method}`);

   res.setHeader('Content-Type', 'text/html');
   if(url === "/"){
res.write(` 
   <html>
    <head><title>Server</title></head>
    <body>
    <h1>This is Home Page...</h1>
    <a href="/about">Go to About Page</a>
    <a href="/contact">Go to Contact Page</a>
    </body>
  </html>`
)

return  res.end();
}

if(url==="/about"){
  res.write(`
    <html>
      <head><title>About Page</title></head>
      <body>
        <h1>This is About Page</h1>
        <a href="/">Back to Home Page</a>
        <a href="/contact">Go to Contact Page</a>
      </body>
    </html>`
  )
return  res.end();}

if(url==="/contact"){
  res.write(`
    <html>
      <head><title>Conatct Page</title></head>
      <body>
        <h1>This is Contact Page</h1>
        <a href="/">Back to Home Page</a>
        <a href="/about">Go to About Page</a>
      </body>
    </html>`
  )
return  res.end();}


  res.write(`
    <html>
      <head><title>404</title></head>
      <body>
        <h1>404 Page Not Found</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
  `);
return  res.end();

})


server.listen(3000, ()=>{
  console.log(`Server is running at port: ${port}`)
})