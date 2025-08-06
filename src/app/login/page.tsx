"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onLogin = async () => {
    try {
      setLoading(true);
      toast.loading("Logging in...", { id: "login" });

      const response = await axios.post("/api/users/login", user);

      toast.success("Login successful!", { id: "login" });

    } catch (error: any) {
      console.error("Login failed", error.response?.data || error.message);

      toast.error(error.response?.data?.error || "Login failed", {
        id: "login",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
      <h1 className="text-3xl font-bold mb-6">{loading ? "Logging in..." : "Login"}</h1>

      <div className="w-full max-w-md">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-lg"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button
          onClick={onLogin}
          disabled={buttonDisabled || loading}
          className={`w-full py-2 text-white rounded-md transition ${
            buttonDisabled || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
