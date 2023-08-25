import { connect } from "@/dbConfig/dbConfig";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";
import multer from "multer";

connect();

export async function PATCH(request: NextRequest) {

    try{
        const reqBody = await request.json();
        console.log(reqBody)
    }catch(error){
        console.log(error)
    }
}