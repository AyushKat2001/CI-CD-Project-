const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello this is a CI/CD Project!" });
});

module.exports = app;