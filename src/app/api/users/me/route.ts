import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse  , NextRequest } from "next/server";
import User from "@/models/userModel";
import {connect } from '@/dbConfig/dbConfig';
connect();
export async function GET(request :NextRequest) {
    try{
       const UserID = await getDataFromToken(request);
       const user = await User.findById(UserID).select("-password");
       return NextResponse.json({
        message:"User Found",
        data:user
       });
       


    }catch(error:any){
        return NextResponse.json({error:error.message} , {status:400});
    }
}