import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Developer from "@/models/developer";

// POST request

export async function POST(request) {
    try {
        const { name, title } = await request.json();
        console.log(name, title);
        await connectMongoDB();
        await Developer.create({ name, title });
        return NextResponse.json({ message: "Created developer" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error creating developer" }, { status: 500 });
    }
}


// GET request

export async function GET() {

    await connectMongoDB();
    const developers = await Developer.find();
    return NextResponse.json({ developers });
}
