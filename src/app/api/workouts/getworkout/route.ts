
import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json(); 
    const userId = reqBody.userId;
    console.log(reqBody);
    const workout = await Workout.find({ userId: userId });
    
    if (workout.length === 0) {
      return NextResponse.json(workout, { status: 200 });
    }

    return NextResponse.json(workout, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
