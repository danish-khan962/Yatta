'use client'
import React, { useState } from 'react'
import { FaArrowTurnDown } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { WavyBackground } from "../components/ui/wavy-background"
import { Courier_Prime, Space_Mono, Prompt } from 'next/font/google'

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["700"] })
const courierPrime = Courier_Prime({ subsets: ["latin"], weight: ["700"] })
const promptFont = Prompt({ subsets: ["latin"], weight: ["500"] })

type HeroProps = {
  onSearch: (query: string) => void
}

const Hero = ({ onSearch }: HeroProps) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search.trim()) return
    onSearch(search.trim())
  }

  return (
    <div className='w-full relative px-6 md:px-16 lg:px-24'>
      <WavyBackground className="max-w-4xl mx-auto pb-1 md:pb-12 h-[50vh] flex flex-col justify-center items-center">
        <p className={`${courierPrime.className} text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var text-center`}>
          Yatta! Your Ultimate Anime Hub
        </p>
        <p className="text-base md:text-xl mt-4 text-white font-normal inter-var text-center">
          Dive into fresh anime news, mind-blowing facts, and everything otaku — all in one place!
        </p>

        <Link href={"/explore"}>
          <div className='group mt-[80px]'>
            <button className={`${spaceMono.className} bg-[#f4f4f4] text-black py-2 px-8 hover:cursor-pointer rounded relative group-hover:bg-red-100 outline-2 outline-black flex justify-center items-center transition-all duration-200 ease-in-out`}>
              Explore <span className='ml-[20px]'><FaArrowTurnDown /></span>
              <div className='bg-red-500 absolute h-full w-full -z-[10] top-2 left-2 rounded-lg group-hover:bg-red-400 outline-2 outline-black'></div>
            </button>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-border w-full mt-[70px]">
          <div className='w-full bg-[#111111] rounded-full flex flex-row justify-between items-center py-1 px-8'>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full bg-[#111111] outline-none rounded-full px-3 py-2 text-white text-lg ${promptFont.className}`}
              placeholder="Search anime news..."
            />
            <button type="submit">
              <FaSearch className='text-xl hover:cursor-pointer hover:text-blue-300' />
            </button>
          </div>
        </form>
      </WavyBackground>
    </div>
  )
}

export default Hero
