//receive the data packets and build data object
//process data
//tbc...
const array = require("./array");

function submit(request, response) {
  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", chunk => {
    body += chunk;
  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    body = JSON.parse(body);
    array.push(body);

    //place author
    response.writeHead(302, { location: "/" });
    response.end();
  });
}

module.exports = submit;
