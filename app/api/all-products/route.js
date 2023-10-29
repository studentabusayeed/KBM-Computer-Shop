import connectMongoDB from "../../../backend/libs/mongodb";
var Product = require('../../../backend/models/Product');
import { NextResponse } from "next/server";

export async function GET(){
 await connectMongoDB();
 const products = await Product.find();
 return NextResponse.json({products})
}