import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  workoutPDF: {
    type: Buffer, 
  },
  diet: {
    type: Buffer, 
  },
  chest : {
    type: Number,
    },
    leftBiceps : {
    type: Number,
    },
    rightBiceps : {
    type: Number,
    },
    waist : {
    type: Number,
    },
    hip : {
    type: Number,
    },
    leftThigh : {
    type: Number,
    },
    rightThigh : {
    type: Number,
    },
    leftCalf : {
    type: Number,
    },
    rightCalf : {
    type: Number,
    },
    weight : {
    type: Number,
    },
    height : {
    type: Number,
    },
});

// This condition is to prevent the model from being compiled again if it was already compiled
const Workout = mongoose.models.workout || mongoose.model("workout", workoutSchema);

export default Workout;
