import { connect } from "@/dbConfig/dbConfig";
import User from "../../../ models/userModel";
import Workout from "../../../ models/workoutModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(request: NextRequest) {
    console.log("entrou no patch");
    try{
        const reqBody = await request.json();
        const 