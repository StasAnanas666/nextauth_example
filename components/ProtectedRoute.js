"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Spinner from "./Spinner"

export default function ProtectedRoute({children}) {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status === "loading") return;
        if(!session) {
            router.push("/login");
        }
    }, [session, status, router])

    if(status === "loading" || !session) {
        return <Spinner />
    }

    return children
}