import { connect } from "@/dbConfig/dbConfig";
import User from "../../../ models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { UserRequestBody } from "@/app/types/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return NextResponse.json(
        { error: "Email não cadastrado," },
        { status: 400 }
      );
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(
      password,
      userExists.passwordHash
    );
    if (!validPassword) {
      return NextResponse.json({ error: "Senha incorreta," }, { status: 400 });
    }

    //create token
    const tokenData = {
      id: userExists._id,
      email: userExists.email,
      role: userExists.role,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    //next response
    const response = NextResponse.json({
      message: "Login realizado com sucesso"},{
        status: 200,
      });

    //set cookie
    response.cookies.set("token", token, {
        httpOnly: true,});
    return response;

    

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
