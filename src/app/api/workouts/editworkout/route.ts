import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";

connect();

export const config = {
  api: {
    bodyParser: false,
  },
};

export const PATCH = async (req: NextRequest) => {
  try {
    const data: any = await req.formData();
    const body = Object.fromEntries(data);

    const workoutfile = data.get("workoutFile");
    const dietfile = data.get("dietFile");

    console.log(workoutfile, "workoutdasdasdasdasdasd");
    console.log(dietfile);


    const { userId } = body;


    const workoutUpdated = await Workout.findOneAndUpdate(
        { userId: userId },
        { workoutPDF: workoutfile, dietPDF: dietfile },
        { new: true }
        );
    console.log(workoutUpdated);
    return NextResponse.json({ message: "This Worked", success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, success: false });
  }
};
