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
        }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;