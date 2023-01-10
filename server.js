const express = require("express");

const app = express();

app.use((req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You can not access this page");
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.write("<h1>Welcome to node middleware</h1>");
});

app.listen(5000);
