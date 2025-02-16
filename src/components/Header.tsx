"use client"
import { useSession,signOut } from 'next-auth/react';
import React from 'react'
import { useNotification } from "@/components/Notification";
import Link from 'next/link';
const Head = () => {
  const { data: session } = useSession();
  const { showNotification } = useNotification();
  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
      
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };
  console.log(session)
  return (
    <div>
      <h2><Link href="/">Home</Link></h2>
      <h2><Link href="/auth/login">Login</Link></h2>
      <h2><Link href="/auth/register">Register</Link></h2>
      <h1>Name : {session?.user?.name}</h1>
      <h1>Email : {session?.user?.email}</h1>
      <br />
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Head
