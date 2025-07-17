import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Michroma } from "next/font/google"
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Space_Mono } from "next/font/google"


const michroma = Michroma({
    subsets: ["latin"],
    weight: ["400"],
})
const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400"],
})

const Footer = () => {
  return (
    <footer className='relative flex flex-row justify-between items-center px-6 md:px-16 lg:px-24 py-[2rem] max-md:flex-col max-md:gap-y-4 max-sm:justify-start max-sm:items-start border-t-1 border-gray-800 w-full pt-5'>
      <Link href={"/"} className={`${michroma.className} text-2xl`}>yatta!</Link>
      <p className={`text-sm ${spaceMono.className}`}>© 2025 Yatta | All Rights Reserved</p>

      <div className='flex flex-row justify-center items-center gap-x-4'>
        <Link href={"#"}><FaGithub className='text-gray-600' /></Link>
        <Link href={"#"}><FaDiscord className='text-gray-600' /></Link>
        <Link href={"#"}><FaLinkedin className='text-gray-600' /></Link>
      </div>
    </footer>
  )
}

export default Footer
