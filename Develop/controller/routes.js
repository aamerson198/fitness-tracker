const express = require("express");
const router = express.Router();
const Workout = require("../model");

router.get("/api/workouts", function(req, res) {
    
  });

  router.post("/api/workouts", function(req, res) {
    Workout.create (req.body)
    .then(dbWorkout => 
        res.json(dbWorkout)) 
        .catch(err => {
            res.json(err);
        });
    });
