'use client'
import { useState } from "react";

// "use client";
export default function Home() {
  console.log("helloo");
  const [email,setEmail]=useState<string>()
   console.log(email)
  return <h1 className="text-3xl" onClick={()=>setEmail('hello')}>welcome to new project</h1>;
}
