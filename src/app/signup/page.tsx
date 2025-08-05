"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";




export default function SignupPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />

            <label htmlFor="email">email</label>
            <input
                className="p-1 border border-gray-300 rounded-lg mb-4 "
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

            <label htmlFor="password">password</label>
            <input
                className="p-1 border border-gray-300 rounded-lg mb-4 "
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />


            <button onClick={onSignup}>Signup here</button>
            <Link href='/login' >Login Page Here</Link>
        </div>
    )
}