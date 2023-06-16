const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config(); //calling config file of dotenv

//To hande cors policy
const cors = require("cors");
app.use(cors());

//import userRoutes
const userRoute = require("./routes/userRoute");

//All the data coming will be converted in json in the backend
//app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Connect to mongodb database(locally)
mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("connected sucessfully");
        app.listen(process.env.PORT || 8000 ,(err) => {
            if(err) console.log(err);

            console.log("running sucessfully at", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("error", error);
    });

app.use(userRoute);
