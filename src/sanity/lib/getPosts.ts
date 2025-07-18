import { client } from '@/sanity/lib/client'
import { PostTypeCard } from '@/components/PostTypeCard'

export async function getPosts(): Promise<PostTypeCard[]> {
  return await client.fetch(
    `*[_type == "posts"]{
      _id,
      title,
      slug,
      creator->{
        name
      },
      views,
      description,
      category,
      image,
      details
    }`
  )
}
