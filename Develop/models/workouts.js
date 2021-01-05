const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    
  },
  excercises: [

    {
        name: {
            type: String,
            unique: true,
        },
        
        type: {
            type: String, 
            
        },
        duration: {
            type: Number, 
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        }

    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;