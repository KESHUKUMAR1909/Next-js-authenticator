import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel.js';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

connect();


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();

        const { username, email, password } = reqBody;

        console.log(reqBody);
        // Check is user already exist
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({
                error: "User already exist",

            }, { status: 500 })
        }


        // hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        console.log(savedUser);
        return NextResponse.json({
            message: "User created Successfully",
            success:true,
            savedUser
        }, { status: 201});



    } catch (error: any) {
        return NextResponse.json({
            error: error.message,

        }, { status: 500 });
    }
}
