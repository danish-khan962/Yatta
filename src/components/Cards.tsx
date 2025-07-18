import React from 'react';
import { PostTypeCard } from './PostTypeCard';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface CardProps {
  card: PostTypeCard;
}

const Cards: React.FC<CardProps> = ({ card }) => {
  return (
    <div className='relative backdrop-blur-2xl bg-white/10 border border-white/20 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer'>
      {card.image ? (
        <Image
          src={urlFor(card.image).width(800).height(400).url()}
          alt={card.title || 'post image'}
          width={800}
          height={400}
          className='w-full h-48 object-cover rounded-md mb-4'
        />
      ) : (
        <div className='w-full h-48 bg-green-800/20 rounded-lg'></div>
      )}
      <h2 className='text-xl font-bold mt-[30px]'>{card.title}</h2>
      <p className='mt-2 text-sm text-[#d5d5d5]'>{card.description}</p>


    </div>
  );
};

export default Cards;