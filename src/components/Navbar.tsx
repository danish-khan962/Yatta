import React from 'react'
import Link from 'next/link'
import { Michroma } from "next/font/google"
import { Space_Mono } from "next/font/google"


const michroma = Michroma({
    subsets: ["latin"],
    weight: ["400"],
})
const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["700"],
})

const Navbar = () => {
  return (
    <nav className='relative z-50 w-full px-6 md:px-16 lg:px-24 py-[15px] flex flex-row justify-between items-center'>
      <Link href={"/"} className={`${michroma.className} text-3xl`}>yatta!</Link>

      <div className='group'>
        <button className={`${spaceMono.className} bg-[#f4f4f4] text-black py-2 px-8 hover:cursor-pointer rounded relative group-hover:bg-green-100 outline-2 outline-black`}>
        Login
        <div className='bg-green-500 absolute h-full w-full -z-[10] top-2 left-2 rounded-lg group-hover:bg-green-400'></div>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
