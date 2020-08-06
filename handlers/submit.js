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
      body  = JSON.parse(body);
      array.push(body);
      array = JSON.parse(array)
      console.log(array);
      console.log("line 13", body, typeof body); // we should have the whole request body now
      console.log("thought: ", body.thought, "author: ", body.author);

        // select template 
        // let template = document.querySelector(".template__article"); 
        // let fragment = template.content.cloneNode(true);
        // console.log(fragment);
        // let thought = fragment.querySelector(".template__article-thought");
        // let author = fragment.querySelector(".template__article-author");
        // thought.textContent = body.thought;
        // author.textContent = body.author;
        // let section = document.querySelector(".blog");
        // section.appendChild(fragment);

        //create a new fragment 


        // const addTemplate = () => {
        //   let template = document.getElementById("template"); // select the template element
        //   let fragment = template.content.cloneNode(true); //get read-only documentFragment from the template, and clone it to put it into the fragment variable
        //   let testItem = fragment.querySelector(".listItem"); //select list item from the
        //   testItem.childNodes[2].textContent = activity.value;
        //   let section = document.querySelector(`.${time.value}`); // select the section related to the time argument
        //   section.appendChild(fragment); //add the new list item to the section
        // };

        

        //place thought value in thought tag
        
        //place author
      response.writeHead(200, { "content-type": "application/json" });
      response.end(array);
    });
  }

  module.exports = submit;