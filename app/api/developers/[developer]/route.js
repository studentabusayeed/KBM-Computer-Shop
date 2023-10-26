import { NextResponse } from "next/server";
import connectMongoDB from "@/backend/libs/mongodb";
import Developer from "@/backend/models/developer";

// GET request

export async function GET(request, { params }) {
    const { developer } = params;
    console.log(developer);
    await connectMongoDB();
    const developers = await Developer.findOne({ _id: developer });
    return NextResponse.json({ developers }, { status: 200 });
}
