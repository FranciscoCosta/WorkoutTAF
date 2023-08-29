import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/ models/userModel";
import bcrypt from "bcryptjs";

connect();
export async function PUT(request: NextRequest) {

  try {
    const reqBody = await request.json();
    const { userId, confirmPassword, password } = reqBody;


    const user = await User.findOne({
        _id: userId,
    });

    if (!user) {
      return NextResponse.json(
        { error: "Erro ao mudar a senha" },
        { status: 400 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);


    if (!isMatch) {
      return NextResponse.json(
        { error: "Senha atual incorreta" },
        { status: 400 }
      );
    }


    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(confirmPassword, salt);

    user.passwordHash = passwordHash;
    await user.save();

    return NextResponse.json({
        message: "Password alterada com sucesso",
        status: 200,
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
