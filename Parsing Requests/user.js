const http = require('http');
const userServer = require('./one');
const server = http.createServer(userServer);


const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

