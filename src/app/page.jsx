"use client"
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function Home() {
     const{userId}=useAuth();
      if(userId!=null){
          redirect("/events")
      }
  return (
    <div className="text-6xl  flex flex-col items-center justify-center gap-5 ">
      <h1 className="font-bold">Fancy Homepage</h1>
      <UserButton></UserButton>
      {/* <Button className={`cursor-pointer`} asChild>
        <SignInButton></SignInButton>
        </Button>
      <Button className={'cursor-pointer'} asChild>
        <SignUpButton></SignUpButton>
        </Button> */}

      
    </div>
  );
}
