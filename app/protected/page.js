"use client";
import { useSession, signOut } from "next-auth/react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProtectedPage() {
    const { data: session } = useSession();

    return (
        <ProtectedRoute>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                {session && <p>Signed in as {session.user.name}</p>}
                <button
                    onClick={() => signOut()}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                    Sign out
                </button>
            </div>
        </ProtectedRoute>
    );
}
