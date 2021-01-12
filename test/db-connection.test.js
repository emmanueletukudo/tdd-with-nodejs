require("dotenv").config();
const mongoose = require("mongoose");
const ArticleService = require("../services/ArticleService");

describe("Connection", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
  });

  test("Retrieve article by Id", async () => {
    const id = "5ffd74cf94620602c41d0bc6";
    const article =  await ArticleService.getArticlebyId(id);
    expect(article.title).toBe("All the test must pass");
  });

  afterAll(async done => {
    mongoose.disconnect();
    done();
});

});
