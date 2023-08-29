const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  let filename = req.url.slice(1) + ".html";
  if (filename == ".html") {
    filename = "index.html";
  }
  console.log(filename);
  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile("404.html", (err, data) => {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.end(data);
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
