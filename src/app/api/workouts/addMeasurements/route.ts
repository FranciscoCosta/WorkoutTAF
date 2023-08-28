
import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  console.log("POST /api/workouts/addMeasurements");
  try {
    const reqBody = await request.json(); 
    const userId = reqBody.userId;
    const measurements = reqBody.measurements;
    console.log(userId, "userId");
    console.log(measurements, "measurements");

    const workout = await Workout.findOneAndUpdate(
      { userId: userId },
      { $push: { measurements: measurements } },
      { new: true }
    );

    const workoutUser = await Workout.find({ userId: userId });
    console.log(workoutUser, "workoutUser");
    console.log(workout);

    return NextResponse.json(workout, { status: 201 });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
