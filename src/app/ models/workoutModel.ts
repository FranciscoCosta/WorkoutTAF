import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  chest: Number,
  leftBiceps: Number,
  rightBiceps: Number,
  waist: Number,
  hip: Number,
  leftThigh: Number,
  rightThigh: Number,
  leftCalf: Number,
  rightCalf: Number,
  weight: Number,
  height: Number,
  date: Date,
});

const workoutSchema = new mongoose.Schema({
  userId: String,
  workoutPDF: {
    data: Buffer,
  },
  dietPDF: {
    data: Buffer,
  },
  measurements: [measurementSchema], // An array of measurement objects
});

const Workout = mongoose.models.workout || mongoose.model("workout", workoutSchema);

export default Workout;
