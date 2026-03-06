const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(url, method);

  // Home Route
  if (url === "/" && method === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Form Page</title></head>
        <body>
          <h1>User Form</h1>
          <form action="/submit" method="POST">
            <label>Enter Your Name:</label>
            <input type="text" name="username" placeholder="Enter Your Name"><br><br>

            <label>Select Your Gender:</label>
            <input type="radio" name="gender" value="Male"> Male
            <input type="radio" name="gender" value="Female"> Female
            <br><br>

            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  // Handle Form Submission
  if (url === "/submit" && method === "POST") {
    fs.writeFileSync('userr.txt', "my name is krishna pandita");

    res.statusCode = 302;
    res.setHeader('Location', '/');  // Redirect to Home
    return res.end();
  }

  // 404 Page
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 404;
  res.write(`
    <html>
      <head><title>Error 404</title></head>
      <body>
        <h1>404 Page Not Found</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});