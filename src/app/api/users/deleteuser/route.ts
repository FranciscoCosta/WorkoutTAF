import { connect } from "@/dbConfig/dbConfig";
import User from "../../../ models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  console.log("entrou no post");
  try{
    const reqBody = await request.json();
    const { userId } = reqBody;

    const user = await User.findByIdAndDelete(userId);

    if(!user){
        return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ message: "Usuário deletado com sucesso!" }, { status: 201 });
    }catch(error: any){
      console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}