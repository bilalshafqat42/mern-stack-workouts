require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

// express app
const app = express();

//middleware
app.use(express.json()); // this middleware require to read routes file in json

// global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

// listening for request
// app.listen(process.env.PORT, () => {
//   console.log(`listening on Port ${process.env.PORT}`);
// });

// connection to database
mongoose
  .connect(process.env.MONG0_URI)
  .then(() => {
    // listening app for request
    app.listen(process.env.PORT, () => {
      console.log(
        `Database connected and listening on Port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
