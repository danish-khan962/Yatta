'use client'

import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { getPosts } from '@/sanity/lib/getPosts'
import { PostTypeCard } from './PostTypeCard'

const Posts = () => {
  const [postData, setPostData] = useState<PostTypeCard[]>([])

  useEffect(() => {
    getPosts().then(setPostData)
  }, [])

  return (
    <div className="relative w-full px-6 md:px-16 lg:px-24 py-2 pb-20">
      <div className="flex flex-row gap-x-5 text-left">
        <h2 className="text-3xl font-semibold">
          "Hey senpai... Don’t you dare scroll without checking these out!"
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-[80px]">
        {postData.map((card: PostTypeCard, index: number) => (
          <Cards key={card._id} card={card}  />
        ))}
      </div>
    </div>
  )
}

export default Posts
