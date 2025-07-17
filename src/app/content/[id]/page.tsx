import React from 'react'
import { newsInfoData } from '../../../../assets/assets';
import { Roboto_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import bleach_poster from "../../../../public/bleach_poster.jpg"


const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ["400"]
});

const inter = Inter({
    subsets: ["cyrillic"],
    weight: ["400"]
})

const page = ({ params }: { params: { id: string } }) => {

    const { id } = params;

    return (
        <div className='w-full relative px-6 md:px-16 lg:px-24 py-2 pt-[30px] pb-[60px] flex flex-col justify-center items-center'>
            {/* Top hero banner details */}
            <div className={`w-full min-h-20 bg-cover bg-center flex flex-col justify-center items-center text-center rounded-2xl p-6 ${robotoMono.className}`} style={{ backgroundImage: "url('/nighttime-bg.jpg')" }}>
                <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-white py-2 px-6 rounded-xl backdrop-blur-lg bg-blue-800/40 border border-white/30 shadow-md'> 16 JULY, 2025 </p>

                <p className='mt-[40px] text-2xl md:text-3xl lg:text-4xl font-semibold text-white py-2 px-8 rounded-xl backdrop-blur-lg bg-green-800/30 border border-white/30 shadow-md'> {newsInfoData[0].name} </p>

                <p className='mt-[40px] md:px-[100px] lg:px-[150px] text-white font-medium py-4 px-6 rounded-xl backdrop-blur-lg bg-gray-800/40 border border-white/30 shadow-md'> {newsInfoData[0].desc} </p>
            </div>

            {/* Main banner image */}
            <div className='max-w-[900px] w-[100%] h-auto mt-[90px] md:mt-[120px] rounded-full'>
                <Image src={bleach_poster} alt='postImage' width={1000} height={1000} className='rounded-xl'/>
            </div>

            {/* Profile and Project name tab */}
            <div className='max-w-[1100px] w-[100%] flex flex-col md:flex-row justify-between items-center gap-y-3 mt-[40px] md:mt-[80px]'>
                <div className='flex flex-row gap-x-6 justify-center items-center'>
                    <div>
                        <Image src={"https://avatars.githubusercontent.com/u/146202005?v=4"} alt='userProfileImage' width={1000} height={1000} className='w-[80px] h-[80px] rounded-full border-2 border-slate-500' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-xl md:text-2xl font-semibold'>Danish Khan</p>
                        <Link href={"#"}><p className='text-md font-medium text-blue-400 cursor-pointer'>@danish962</p></Link>
                    </div>
                </div>

                <div className='text-lg md:text-2xl font-medium backdrop-blur-2xl bg-white/10 border-[1px] border-gray-500 py-2 px-10 rounded-full max-sm:mt-[20px]'>
                    {newsInfoData[0].name}
                </div>
            </div>

            {/* Content Text posted by user */}
            <div className={`${inter.className} text-xs md:text-sm lg:text-md font-light mt-[40px] md:mt-[60px] max-w-[1100px] w-[100%] text-gray-200`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia corrupti fuga eius quod maxime praesentium soluta porro, quam cumque earum excepturi aperiam! Ipsam deleniti nostrum neque ratione voluptatum beatae. Voluptatem temporibus eligendi totam reprehenderit enim illum neque, ducimus ullam soluta itaque sed, ab perspiciatis, quas ipsam provident? Praesentium excepturi, quod explicabo optio labore suscipit, voluptatum enim ducimus deleniti soluta cupiditate. Commodi libero aliquid nihil doloribus ipsam recusandae iusto delectus repudiandae optio. Reiciendis quo doloremque id accusantium debitis? Eos sequi corrupti atque tenetur nesciunt ipsa esse at, corporis dolor officia placeat repudiandae alias unde pariatur quisquam animi delectus similique? Alias, molestiae?
            </div>
        </div>
    )
}

export default page
