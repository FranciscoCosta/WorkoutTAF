
import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json(); 
    const userId = reqBody.data.userId;

    const workout = await Workout.create({
      userId: userId,
      measurements: [],
      workoutPDF: null,
      dietPDF: null,
    });


    return NextResponse.json(workout, { status: 201 });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
