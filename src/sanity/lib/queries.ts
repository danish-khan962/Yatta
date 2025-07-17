import { defineQuery } from "next-sanity";

// Get all posts, optionally filtered by search, ordered by views
export const POSTS_QUERY = defineQuery(
  `*[ 
    _type == "posts" &&
    defined(slug.current) &&
    (
      !defined($search) ||
      title match $search ||
      category match $search ||
      creator->creator_name match $search
    )
  ] | order(views desc) {
    _id,
    title,
    slug,
    _createdAt,
    creator -> {
      _id,
      creator_name,
      image,
      bio,
      username
    },
    views,
    description,
    category,
    image
  }`
);

// Get single post by ID
export const POST_BY_ID_QUERY = defineQuery(`
  *[_type == "posts" && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    creator -> {
      _id,
      creator_name,
      username,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    details
  }
`);

// Get views count by post ID
export const POST_VIEWS_QUERY = defineQuery(`
  *[_type == "posts" && _id == $id]{
    views
  }[0]
`);

// Get creator by custom creatorId
export const CREATOR_BY_CREATOR_ID_QUERY = defineQuery(`
  *[_type == "creator" && creatorId == $id][0]{
    _id,
    creatorId,
    creator_name,
    username,
    email,
    image,
    bio
  }
`);

// Get creator by Sanity _id
export const CREATOR_BY_ID_QUERY = defineQuery(`
  *[_type == "creator" && _id == $id][0]{
    _id,
    creatorId,
    creator_name,
    username,
    email,
    image,
    bio
  }
`);

// Get all posts by creator (using _ref)
export const POSTS_BY_CREATOR_QUERY = defineQuery(`
  *[_type == "posts" && creator._ref == $id] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    creator -> {
      _id,
      creator_name,
      image,
      bio,
      username
    },
    views,
    description,
    category,
    image
  }
`);

// Get posts by category
export const POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "posts" && category == $category] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    creator -> {
      _id,
      creator_name,
      image,
      bio,
      username
    },
    views,
    description,
    category,
    image,
    details
  }
`);
