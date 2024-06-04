"use client"
import { useSession, signOut } from "next-auth/react"

export default function ProtectedPage() {
  const handleSignOut = async() => {
    await signOut({callbackUrl: "/login"});
  }

  const { data: session } = useSession()
  if(session) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            
            <p>Signed in as {session.user.name}</p>
            <button onClick={handleSignOut} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Sign out
            </button>
        </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-2xl">Access Dinied</h1>
          <p>Вы должны войти, чтобы получить доступ к содержимому страницы</p>
      </div>
    )
  }
}