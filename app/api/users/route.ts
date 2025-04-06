import dbConnect from "@/utils/dbConnect";
import User from  '@/lib/models/user.model';
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
        await dbConnect();
        const { name, email } = await request.json();

        const newUser = new User({
            name, email
        });
        await newUser.save();
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.log(err);
    }
}