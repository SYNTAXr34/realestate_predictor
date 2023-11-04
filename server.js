const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use("/images", express.static(path.join(__dirname, "Public")));

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/nazim")
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("Hello Nazim");
});

app.listen(3000, () => console.log("Server running"));
