const express = require("express");
// const router = express.Router();
const db = require("../models");

module.exports = (app) => {

  app.get("/api/workouts", (req, res) => {

    db.Workout.find().then(foundWorkout => {

      res.json(foundWorkout);
      console.log(foundWorkout);
    })
  })

  app.post('/api/workouts', ({body}, res) => {
    console.log ("request /api/workouts: ", body);
    db.Workout.create(body)
        .then(dbWorkout => {
            console.log("new workout has been created: ", dbWorkout)
            res.json(dbWorkout);
        })
        .catch(({message}) => {
            console.log("error port/api/workouts", message);
        });
 });

  app.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      function (err, result) {
        if (err) {
          console.log("Error: ", err);
          res.send(err);
        } else {
          console.log("Updated dbWorkout: ", result);
          res.send(result);
        }
      }
    );
  });
};

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
// module.exports = router