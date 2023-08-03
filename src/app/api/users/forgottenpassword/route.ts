import { connect } from "@/dbConfig/dbConfig";
import User from "../../../ models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  console.log("entrou no post");
  try{
    const reqBody = await request.json();
      console.log(reqBody);
      const { email } = reqBody;


        //Check if user already exists
        const userExists = await User.findOne({ email });
        if (!userExists) {
          return NextResponse.json(
            { error: "Email não cadastrado" },
            { status: 400 }
          );
        }

        await sendEmail({
            email,
            emailType: "RESET_PASSWORD",
            userId: userExists._id,
          });

        return NextResponse.json(
            { message: "Email enviado com sucesso." },
            { status: 201 }
          );
    }catch(error: any){
      console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}