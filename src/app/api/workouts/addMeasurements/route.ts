
import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json(); 
    const userId = reqBody.userId;
    const measurements = reqBody.measurements;

    const workout = await Workout.findOneAndUpdate(
      { userId: userId },
      { $push: { measurements: measurements } },
      { new: true }
    );

    const workoutUser = await Workout.find({ userId: userId });

    return NextResponse.json(workout, { status: 201 });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
