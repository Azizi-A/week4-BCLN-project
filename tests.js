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
