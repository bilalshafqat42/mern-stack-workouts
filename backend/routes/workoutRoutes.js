const express = require("express");

const router = express.Router();

//  get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" });
});

// get single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single workout" });
});

// post workout
router.post("/", (req, res) => {
  // get access to request body
  //   const { title, reps, load } = req.body;

  res.json({ mssg: "post a workout" });
});

// delete workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a workout" });
});

// update workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a workout" });
});

module.exports = router;
