require("dotenv").config();
const express = require("express");

// express app
const app = express();

//middleware
app.use(express.json());

// global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

// listening for request
app.listen(process.env.PORT, () => {
  console.log(`listening on Port ${process.env.PORT}`);
});
