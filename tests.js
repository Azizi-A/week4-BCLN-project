const test = require("tape");
const supertest = require("supertest");
const router = require("./router");


test("Initialise", t => {
    let num = 2;
    t.equal(num, 2, "Should return 2");
    t.end();
});


test("Sending a thought and name to /submit", t => {
    const body = {"thought" : "Once there was a little boy",
                    "name" : "Jihyun"};
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
            t.equal(body.name, "Jihyun");
            t.end();
        });
});
