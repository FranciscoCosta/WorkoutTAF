
import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const workout = await Workout.find({ userId: userId });

    console.log(workout);
    
    if (workout.length !== 0) {
      return NextResponse.json(workout, { status: 200 });
    }

    

    return NextResponse.json(workout, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
