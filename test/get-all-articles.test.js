require("dotenv").config();
const mongoose = require("mongoose");
const ArticleService = require("../services/ArticleService");

describe("Get all Articles", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
    });

    test("Get all Articles", async() => {
        const articles = await ArticleService.getAllArticles();
        expect(articles).toEqual(expect.arrayContaining(articles)); 
    });

    afterAll(async done => {
        mongoose.disconnect();
        done();
    });
})