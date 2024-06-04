"use client"
import { signIn } from "next-auth/react"

export default function Login() {
  const handleSignIn = async() => {
    await signIn("google", {callbackUrl: "/protected"});
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-2xl font-bold">Login</h1>
    <button onClick={handleSignIn} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Sign in with Google</button>
    </div>
  )
}