require("dotenv").config();
const mongoose = require("mongoose");
const ArticleService = require("../services/ArticleService");

describe("Should perform CRUD on article Service", () => {
    beforeAll(async() => {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
    });

    test("Creat article", async() => {
        const newArticle = {
            title: "All the test must pass",
            body: "Should the test fail, we should work had to improve our code",
            avartar: "https://dev-to-uploads.s3.amazonaws.com/i/blaf4ke2xt3j08mlx4ca.png",
        }
        const article =  await ArticleService.createArticle(newArticle);
        expect(article).toEqual(expect.objectContaining(article));
    });

    test("Update article", async() => {
        const articleToUpdate = {
            title: "All the tests get passed",
            body: "Should the test fail, we should work had to improve our codebase",
            avartar: "https://dev-to-uploads.s3.amazonaws.com/i/blaf4ke2xt3j08mlx4ca.png",
        };
        const article = await ArticleService.updateArticle(articleToUpdate);
        expect(article).toEqual(expect.objectContaining(article));
    });

    test("Get article by Id", async() => {
        const articleId = "5ffcc8b0d7556519346f3bd8"
        const article = await ArticleService.getArticlebyId(articleId);
        expect(article).toEqual(expect.objectContaining(article));
    });

    test("Delete article", async() => {
        const articleId = "5ffcc8fcb6f631195c9a3529";
        const article =  await ArticleService.deleteArticle();
        expect(article).toEqual(expect.objectContaining(article));
    })

    afterAll(async (done) => {
        mongoose.disconnect();
        done()
    })
})