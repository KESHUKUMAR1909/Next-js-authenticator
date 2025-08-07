"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
export default function ProfilePage(){
    const router = useRouter();
    const [data , setData] = useState("");
    const onLogout =async ()=>{
        try{
            const response = await axios.get('/api/users/logout')
            toast.success("Logout Successfull");
            router.push('/login');
        }catch(error:any){
            console.log(error.message);
            toast.error(error.message);
        }
    }
    const getUserDetails = async()=>{
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
    }
    return (
        <div className="">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>   
        <h2>{data==="" ? "nothing" :
            <Link href={`profile/${data}`}></Link>
            }</h2>
            <hr />
            <button onClick={onLogout}>Logout</button>
            <button onClick={getUserDetails}>Get User Details</button>
        </div>
    )
}