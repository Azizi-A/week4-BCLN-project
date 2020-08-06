const submitBtn = document.querySelector(".form__button-submit");
const inputThought = document.querySelector(".form__input-thought");
const inputAuthor = document.querySelector(".form__input-author");

submitBtn.addEventListener("submit", event => {
  event.preventDefault();
  url = "/submit";
  // arrange form inputs into object
  const data = {};
  data.thought = inputThought.value;
  data.author = inputAuthor.value;

  // send post request
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
