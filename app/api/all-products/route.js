import connectMongoDB from "../../../backend/libs/mongodb";
import Product from "../../../backend/models/Products";
import { NextResponse } from "next/server";

export async function GET(){
 await connectMongoDB();
 const products = Product.find()
 return NextResponse.json({products})
}