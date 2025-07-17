import React from 'react'
import { Icon } from '@/components/ui/evervault-card';
import { EvervaultCard } from '@/components/ui/evervault-card';
import { Space_Mono } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { newsInfoData } from '../../../../assets/assets';
import Cards from '@/components/Cards';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const page = ({ params }: { params: { id: string } }) => {

  const { id } = params;

  return (
    <div className='w-full relative px-6 md:px-16 lg:px-24 pt-[60px] pb-[120px]'>
      <div className='flex flex-row justify-between gap-x-24'>
        {/* Profile Card */}
        <div className=" flex flex-col items-center text-center h-1/4 mx-auto p-4 relative max-w-[400px] w-[100%] bg-[#1a1a1a] backdrop-blur-sm ">
          <Icon className="absolute h-6 w-6 -top-3 -left-3  text-blue-500" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-blue-500" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3  text-blue-500" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-blue-500" />

          <EvervaultCard text="Danish Khan" imageUrl={"https://avatars.githubusercontent.com/u/146202005?v=4"}/>

          <div className='group'>
            <div className={`text-2xl font-semibold rounded-lg mt-4 text-black relative bg-[#fafafa] py-2 px-8 outline-2 outline-black group-hover:bg-yellow-100 transition-all ease-in-out duration-200 group-hover:cursor-pointer`}>
            @danish_khan

            <div className='h-full w-full absolute -z-10 bg-yellow-400 top-[10px] left-[10px] rounded-lg group-hover:bg-yellow-300'></div>
          </div>
          </div>

          <h2 className={`text-white text-sm font-medium mt-[30px] ${roboto.className} line-clamp-3 `}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum accusantium cupiditate quam nulla natus. Officia, exercitationem id! Fuga at a cupiditate explicabo dolor. Voluptates, pariatur id dignissimos, suscipit cupiditate atque placeat commodi saepe explicabo sequi, ipsum rem deserunt nulla. Optio provident repellendus laudantium delectus dolorum ea perferendis unde corporis!
          </h2>
        </div>

        {/* Post Cards */}
        <div className='flex-1 flex-col lg:mt-6'>
          <p className='text-3xl font-semibold'>User Posts</p>

          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]'>
              {
                    newsInfoData.map((card, index) => (
                        <Cards key={index} card={card} />
                    ))
                }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
