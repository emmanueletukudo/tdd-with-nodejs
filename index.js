require('dotenv').config();
const exepress = require("express");
const router = exepress.Router();
const mongoose =  require("mongoose");
const articles = require("./routes/article.routes");
const bodyParser =  require("body-parser");

const app = exepress();
const port = 8000;

mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(exepress.json())
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())



app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
})

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
})

//register the enpoint
app.use("/api/v1/articles", articles);