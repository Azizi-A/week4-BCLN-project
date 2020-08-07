const submitBtn = document.querySelector(".form__button-submit");
const inputThought = document.querySelector(".form__input-thought");
const inputAuthor = document.querySelector(".form__input-author");
const postsList = document.querySelector(".main__article-posts");
const template = document.querySelector("template");

fetch("/get-post")
  .then(res => {
    if (!res.ok) {
      throw new Error("Server error");
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
    postsList.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      //loop through each object in the array (which we're getting as our response)
      // create post
      const post = data[i]; // select the relevant object from the array (should be something like {thought: 'Cows are cute', author: 'Bob'})
      const newStory = template.content.cloneNode(true); //get the read-only document fragment from the template and clone it
      let thought = newStory.querySelector(".template__article-thought"); //get the thought element in the fragment thats just been created
      let author = newStory.querySelector(".template__article-author"); //get the thought element in the fragment thats just been created
      thought.textContent = post.thought;
      author.textContent = post.author;

      let deleteButton = newStory.querySelector(".template__button-delete");
      // deleteButton.addEventListener("click", () => {
      //   fetch("/", { method: "DELETE", body: key }).then(location.reload());
      // });

      // adds story into index.html
      postsList.appendChild(newStory);
    }
  })
  .catch(err => console.error(err));

submitBtn.addEventListener("click", event => {
  event.preventDefault();
  // url = "/submit";
  // console.log(url);
  // arrange form inputs into object
  const data = {};
  data.thought = inputThought.value;
  data.author = inputAuthor.value;
  console.log(data);

  // send post request
  fetch("/submit", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
