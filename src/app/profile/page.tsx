"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("");

  const onLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error) {
      toast.error("Failed to get user details");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Profile</h1>
        <hr className="mb-4" />
        <p className="text-gray-700 text-center mb-4">Welcome to your profile page.</p>

        <div className="text-center mb-6">
          <h2 className="text-lg font-medium">
            {data === "" ? (
              <span className="text-red-500">No user data</span>
            ) : (
              <Link
                href={`/profile/${data}`}
                className="text-blue-500 hover:underline"
              >
                Go to Profile
              </Link>
            )}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={onLogout}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
          <button
            onClick={getUserDetails}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Get User Details
          </button>
        </div>
      </div>
    </div>
  );
}
