"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast"; // ✅ import toast

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Signup successful! Please login.");
      router.push("/login");
    } catch (error: any) {
      console.error("Signup failed", error.response?.data || error.message);
      toast.error(error.response?.data?.error || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { username, email, password } = user;
    setButtonDisabled(!(username && email && password));
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        {loading ? "Signing you up..." : "Signup"}
      </h1>

      <div className="w-full max-w-md">
        <label htmlFor="username" className="block mb-1 font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="w-full px-3 py-2 mb-4 border rounded-md"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 mb-4 border rounded-md"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 mb-6 border rounded-md"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={onSignup}
          disabled={buttonDisabled || loading}
          className={`w-full py-2 text-white rounded-md transition ${
            buttonDisabled || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Processing..." : "Signup"}
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
