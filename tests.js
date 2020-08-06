const supertest = require("supertest");
const test = require("tape");
const router = require("./router");

test("Check that home handler works correctly", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, response) => {
      t.error(err);
      t.match(response.text, /<!DOCTYPE html>/); 
      t.end();
    });
  });

test("Initialise", t => {
    let num = 2;
    t.equal(num, 2, "Should return 2");
    t.end();
});


test("Sending a thought and name to /submit", t => {
    const body = {thought : "Once there was a little boy",
                    author : "Jihyun"};
    supertest(router)
        .post("/submit")
        .set({"Microblog": "post"})
        .send(body)
        .expect(200)
        .expect("content-type" , "application/json")
        .end((err, res) => {
            t.error(err);
            console.log("body in test: ", body);
            t.equal(body.thought, "Once there was a little boy");
            t.equal(body.author, "Jihyun");
            t.end();
        });
});

test("Sending a thought and name to /submit", t => {
  const body = {thought : "Once there was a girl",
                  author : "Jennifer"};
  supertest(router)
      .post("/submit")
      .set({"Microblog": "post"})
      .send(body)
      .expect(200)
      .expect("content-type" , "application/json")
      .end((err, res) => {
          t.error(err);
          console.log("body in test: ", body);
          t.equal(body.thought, "Once there was a girl");
          t.equal(body.author, "Jennifer");
          t.end();
      });
});
