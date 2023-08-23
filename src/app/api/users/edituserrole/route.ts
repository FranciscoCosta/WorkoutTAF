import { connect } from "@/dbConfig/dbConfig";
import User from "../../../ models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(request: NextRequest) {
    console.log("entrou no patch");
    try{
        const reqBody = await request.json();
        const { userId, role } = reqBody;
        const user = await User.findByIdAndUpdate(
            userId,
            {
                role: role
            },
            {
                new: true
            }
        );
        



        console.log(user);

        return NextResponse.json(
            { message: "Role do usuário atualizado com sucesso." },
            { status: 200 }
            );
    }catch(error : any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
        