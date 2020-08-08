const http = require("http");
const path = require("path");
const router = require(path.join(__dirname, "router"));
const port = process.env.PORT || 3000;

//create the server here
const server = http.createServer((request, response) => {
  //calls router function
  router(request, response);
});
//server takes request
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
