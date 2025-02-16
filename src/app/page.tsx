
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
     <h2>Home Page</h2>
     <h1> <Link href="/profile">Profile</Link> </h1>
    </div>
  )
}

export default Home
