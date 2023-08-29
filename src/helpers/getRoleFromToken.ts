import { NextRequest } from "next/server";

import jwt from "jsonwebtoken";

export const getRoleFromToken =(request: NextRequest)=>{
    try{
        const encodedToken = request.cookies.get("token")?.value || '';
        const decodedToken : any = jwt.verify(encodedToken, process.env.TOKEN_SECRET!)
        return decodedToken.role;
    }catch(error: any){
        throw new Error(error.message)
    }

}