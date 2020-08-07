const path = require("path");
const getPosts = require(path.join(__dirname, "handlers", "getposts"));
const home = require(path.join(__dirname, "handlers", "home"));
const submit = require(path.join(__dirname, "handlers", "submit"));
const missing = require(path.join(__dirname, "handlers", "missing"));
const public = require(path.join(__dirname, "handlers", "public"));

const router = (request, response) => {
  //check url and req method
  const url = request.url;
  const method = request.method;

  //if url is home and method is get,
  if (url === "/") {
    //  serve homepage
    home(request, response);
    //if url is submit and method is post,
  } else if (url === "/submit") {
    //&& method === "POST"
    submit(request, response);
  } else if (url === "/get-post") {
    getPosts(request, response);
  } else if (url.includes("public")) {
    public(request, response);
  } else {
    missing(request, response);
  }
};

module.exports = router;
