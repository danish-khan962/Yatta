import React from 'react'
import { Russo_One } from 'next/font/google';
import Form from '@/components/Form';

const russoOne = Russo_One({
    subsets: ["latin"],
    weight: ["400"]
});

const page = () => {
  return (
    <div className='w-full relative px-6 md:px-16 lg:px-24 py-2 pb-[80px] mt-[20px]'>

      {/* Banner */}
      <div className={`w-full min-h-100 bg-cover bg-center flex flex-col justify-center items-center text-center rounded-2xl p-6 relative`} style={{ backgroundImage: "url('/ninja-bg.jpg')" }}>
        <p className={`mt-[40px] md:px-[100px] lg:px-[150px] text-white font-medium py-4 px-6 rounded-xl backdrop-blur-lg bg-gray-800/40 border border-white/30 shadow-md text-xl md:text-3xl lg:text-4xl md:leading-[54px] ${russoOne.className}`}>The Portal to <br /> Creation Has Opened!</p>

        <p className='mt-[40px] md:px-[100px] lg:px-[150px] text-white font-semibold py-2 px-2 rounded-xl backdrop-blur-lg bg-yellow-800/60 border border-white/30 shadow-md text-xs md:text-sm absolute bottom-5 '>Forge your masterpiece — fill the scroll below!</p>
      </div>


      {/* Form */}
      <div className='w-full flex justify-center items-center mt-[60px] md:mt-[120px]'>
        <Form />
      </div>
    </div>
  )
}

export default page
