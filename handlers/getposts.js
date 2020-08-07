let posts = require("./array");

const getposts = (request, response) => {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(posts));
};

module.exports = getposts;
