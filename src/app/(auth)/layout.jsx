"use client"
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
export default  function AuthPageLayout({children}){

    const{userId}=useAuth();
    if(userId!=null){
        redirect("/events")
    }

    return(
        <>
        <div className="w-full min-h-screen bg-amber-200 flex justify-center items-center">
            {children}
        </div>
        </>
    )
}