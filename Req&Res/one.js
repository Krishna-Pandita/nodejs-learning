const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Node JS</title></head>')
 res.write('<body><h1>This is Node js Lecture</h1></body>')
    res.write('</html>')
    res.end();
})

const port = 3000;
server.listen(port, () =>{
  console.log(`Server running at port: ${port}/`)
})