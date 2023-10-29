import { NextResponse } from "next/server";
import connectMongoDB from "../../../backend/libs/mongodb";
import User from "@/backend/models/User"
export async function GET(){
    await connectMongoDB()
    const users = await User.find();
    return NextResponse.json({users})
}