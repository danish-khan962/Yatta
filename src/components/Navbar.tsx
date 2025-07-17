import React from 'react'
import Link from 'next/link'
import { Michroma } from "next/font/google"
import { Space_Mono } from "next/font/google"
import { auth } from '../../auth'
import SignIn from './SignIn'
import Image from 'next/image'
import SignOut from './SignOut'
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
})
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
})

const Navbar = async () => {


  //authentication session
  const session = await auth();

  return (
    <nav className='relative z-50 w-full px-6 md:px-16 lg:px-24 py-[15px] flex flex-row justify-between items-center'>
      <Link href={"/"} className={`${michroma.className} text-3xl`}>yatta!</Link>

      <div>
        {session && session?.user ? (
          <div className='flex flex-row items-center justify-center gap-x-6 max-sm:hidden'>
            <Link href={"/content/create"} className='group' >
              <button className={`${spaceMono.className} bg-[#f4f4f4] text-black py-2 px-8 hover:cursor-pointer rounded relative group-hover:bg-indigo-100 outline-2 outline-black`}>
                Create
                <div className='bg-indigo-500 absolute h-full w-full -z-[10] top-2 left-2 rounded-lg group-hover:bg-indigo-400'></div>
              </button>
            </Link>
            
            <SignOut />

            <Link href={"/user"}>
              <div className='h-[40px] w-[40px] bg-green-500/20 rounded-full border-[1px] border-gray-500 flex items-center justify-center'>
                <FaUser />
              </div>
            </Link>

          </div>
        )

          :
          (
            <SignIn />
          )}
      </div>
    </nav>
  )
}

export default Navbar
