const express = require("express");

const Workout = require("../models/workoutModels");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers");

const router = express.Router();

//  get all workouts
router.get("/", getWorkouts);

// get single workout
router.get("/:id", getWorkout);

// post workout
router.post("/", createWorkout);

// delete workout
router.delete("/:id", deleteWorkout);

// update workout
router.patch("/:id", updateWorkout);

module.exports = router;
