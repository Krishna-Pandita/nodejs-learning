const fs = require('fs');

const requesthandler = (req, res) => {
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
            <input type="radio" name="gender" value="Other"> Other
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
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);

      fs.writeFile('userr.txt', fullbody, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.statusCode = 500;
          return res.end("Internal Server Error");
        }

        // Redirect after saving file
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });

    return; //  VERY IMPORTANT (prevents 404 from running)
  }

  // 404 Page (only runs if no route matched)
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
};

module.exports = requesthandler;