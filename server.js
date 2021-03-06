const express = require("express");
require("dotenv").config();
const router = require("./routes/index");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI ||
        ,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

app.use(router);

app.listen(PORT, () => {
    console.log(`App boot success on port: ${PORT}`);
});
