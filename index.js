const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Assignmment api server running");
});

app.listen(port, () => {
  console.log("Learning Platform file reloading");
});
