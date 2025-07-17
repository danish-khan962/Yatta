'use client'
import React, { useState } from 'react'
import Hero from '@/components/Hero'
import Posts from '@/components/Posts'

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <Hero onSearch={(query) => setSearchQuery(query)} />
      <Posts searchQuery={searchQuery} />
    </div>
  )
}

export default Page
