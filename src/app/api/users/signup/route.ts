import { connect } from "@/dbConfig/dbConfig";
import User from "../../../ models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { UserRequestBody } from "@/app/types/types";
import bcrypt from "bcryptjs";


connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, email, password } = reqBody;

    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 400 }
      );
    }
    //hash password

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    //create user
    const newUser = new User({
      firstName,
      lastName,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json(
      { message: "Usuário criado com sucesso" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
