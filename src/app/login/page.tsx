"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";




export default function LoginPage(){

    const [user , setUser] = React.useState({
        email:"",
        password:"",
        username:""
    });

    const onLogin = async ()=>{
         
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input
             className="p-1 border border-gray-300 rounded-lg mb-4 "
             type="text" 
             id="username"
             value={user.username}
             onChange={(e)=>setUser({...user , username:e.target.value})}
             placeholder="username"
             />

               <label htmlFor="email">email</label>
            <input
             className="p-1 border border-gray-300 rounded-lg mb-4 "
             type="email" 
             id="email"
             value={user.email}
             onChange={(e)=>setUser({...user ,email:e.target.value})}
             placeholder="email"
             />

               <label htmlFor="password">password</label>
            <input
             className="p-1 border border-gray-300 rounded-lg mb-4 "
             type="password" 
             id="password"
             value={user.password}
             onChange={(e)=>setUser({...user , password:e.target.value})}
             placeholder="password"
             />


             <button onClick={onLogin}>Login here</button>
             <Link href='/signup' >Signup page here</Link>
        </div>
    )
}