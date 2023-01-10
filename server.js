const express = require("express");
const route = express.Router();
const app = express();

// app.use((req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please provide age");
//   } else if (req.query.age < 18) {
//     res.send("You can not access this page");
//   } else {
//     next();
//   }
// });

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You can not access this page");
  } else {
    next();
  }
};

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to node middleware</h1>");
});

route.get("/about", (req, res) => {
  res.send("<h1>Welcome to About Page</h1>");
});

route.get("/contact", reqFilter, (req, res) => {
  res.send("<h1>Welcome to Contact Page</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1>Welcome to Help Page</h1>");
});

app.use("/", route);

app.listen(5000);
