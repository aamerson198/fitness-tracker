const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {

  db.Workout.find().then(foundWorkout => {

    res.json(foundWorkout);
    console.log(foundWorkout);
  })
})

router.post("/api/workouts", function (req, res) {
  db.Workout.create(req.body)
    .then(dbWorkout =>
      res.json(dbWorkout))
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

router.get("/api/workouts", (req, res) => {
  db.Workouts.find().then((foundWorkouts) => {
    res.json(foundWorkouts);
  });
});

// router.get("/api/donuts/:id", (req, res) => {
//   db.Donut.findById(req.params.id).then((foundDonut) => {
//     res.json(foundDonut);
//   });
// });

// router.post("/api/donuts", (req, res) => {
//   db.Donut.create(req.body).then((newDonut) => {
//     res.json(newDonut);
//   });
// });

// router.put("/api/donuts/:id", (req, res) => {
//   db.Donut.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
//     (updatedDonut) => {
//       res.json(updatedDonut);
//     }
//   );
// });

// router.delete("/api/donuts/:id", (req, res) => {
//   db.Donut.findByIdAndDelete(req.params.id).then((result) => {
//     res.json(result);
//   });
// });
module.exports = router