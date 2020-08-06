//receive the data packets and build data object
//process data
//tbc...
function submit(request, response) {
    let body = "";
    // callback runs every time the stream has the next bit of data
    request.on("data", chunk => {
      body += chunk;
    });
    // callback runs when request finishes and we have all the data
    request.on("end", () => {
      console.log(body); // we should have the whole request body now
        //create a template 

        //place thought value in thought tag

        //place author
      response.writeHead(200, { "content-type": "text/html" });
      response.end(
          //send back index.html

        );
    });
  }