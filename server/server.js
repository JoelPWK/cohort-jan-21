const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//initiate dotenv package to look through .env files
dotenv.config();

//server setup
const app = express();
// const PORT = process.env.PORT || 3001;
app.listen(3001, () => console.log(`Server Started on port: 3001`));

//quick local test
app.get("/test", (req, res) => {
  res.send("working!");
});

//mongoDB connection


