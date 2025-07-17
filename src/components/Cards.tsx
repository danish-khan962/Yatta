import React from 'react';
import { NewsCard } from '../../assets/assets';
import Image from 'next/image';

interface CardProps {
  card: NewsCard;
}

const Cards: React.FC<CardProps> = ({ card }) => {
  return (
    <div className='relative backdrop-blur-2xl bg-white/10 border border-white/20 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer'>
      {/* <Image
        src={card.img}
        alt={card.name}
        width={1000}
        height={1000}
        className='w-full h-48 object-cover rounded-md mb-4'
      /> */}

      <div className='w-full h-48 bg-green-800/20 rounded-lg'></div>
      <h2 className='text-xl font-bold mt-[30px]'>{card.name}</h2>
      <p className='mt-2 text-sm text-[#d5d5d5]'>{card.desc}</p>

    </div>
  );
};

export default Cards;