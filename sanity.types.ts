/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type Posts = {
  _id: string;
  _type: "posts";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  creator?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "creator";
  };
  views?: number;
  description?: string;
  category?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  details?: string;
};

export type Creator = {
  _id: string;
  _type: "creator";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  creatorId?: number;
  creator_name?: string;
  username?: string;
  email?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: string;
};

export type Markdown = string;

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes = Posts | Creator | Markdown | SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[     _type == "posts" &&    defined(slug.current) &&    (      !defined($search) ||      title match $search ||      category match $search ||      creator->creator_name match $search    )  ] | order(views desc) {    _id,    title,    slug,    _createdAt,    creator -> {      _id,      creator_name,      image,      bio,      username    },    views,    description,    category,    image  }
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  creator: {
    _id: string;
    creator_name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    bio: string | null;
    username: string | null;
  } | null;
  views: number | null;
  description: string | null;
  category: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;
// Variable: POST_BY_ID_QUERY
// Query: *[_type == "posts" && _id == $id][0]{    _id,    title,    slug,    _createdAt,    creator -> {      _id,      creator_name,      username,      image,      bio    },    views,    description,    category,    image,    details  }
export type POST_BY_ID_QUERYResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  creator: {
    _id: string;
    creator_name: string | null;
    username: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    bio: string | null;
  } | null;
  views: number | null;
  description: string | null;
  category: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  details: string | null;
} | null;
// Variable: POST_VIEWS_QUERY
// Query: *[_type == "posts" && _id == $id]{    views  }[0]
export type POST_VIEWS_QUERYResult = {
  views: number | null;
} | null;
// Variable: CREATOR_BY_CREATOR_ID_QUERY
// Query: *[_type == "creator" && creatorId == $id][0]{    _id,    creatorId,    creator_name,    username,    email,    image,    bio  }
export type CREATOR_BY_CREATOR_ID_QUERYResult = {
  _id: string;
  creatorId: number | null;
  creator_name: string | null;
  username: string | null;
  email: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  bio: string | null;
} | null;
// Variable: CREATOR_BY_ID_QUERY
// Query: *[_type == "creator" && _id == $id][0]{    _id,    creatorId,    creator_name,    username,    email,    image,    bio  }
export type CREATOR_BY_ID_QUERYResult = {
  _id: string;
  creatorId: number | null;
  creator_name: string | null;
  username: string | null;
  email: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  bio: string | null;
} | null;
// Variable: POSTS_BY_CREATOR_QUERY
// Query: *[_type == "posts" && creator._ref == $id] | order(_createdAt desc) {    _id,    title,    slug,    _createdAt,    creator -> {      _id,      creator_name,      image,      bio,      username    },    views,    description,    category,    image  }
export type POSTS_BY_CREATOR_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  creator: {
    _id: string;
    creator_name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    bio: string | null;
    username: string | null;
  } | null;
  views: number | null;
  description: string | null;
  category: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;
// Variable: POSTS_BY_CATEGORY_QUERY
// Query: *[_type == "posts" && category == $category] | order(_createdAt desc) {    _id,    title,    slug,    _createdAt,    creator -> {      _id,      creator_name,      image,      bio,      username    },    views,    description,    category,    image,    details  }
export type POSTS_BY_CATEGORY_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  creator: {
    _id: string;
    creator_name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    bio: string | null;
    username: string | null;
  } | null;
  views: number | null;
  description: string | null;
  category: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  details: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[ \n    _type == \"posts\" &&\n    defined(slug.current) &&\n    (\n      !defined($search) ||\n      title match $search ||\n      category match $search ||\n      creator->creator_name match $search\n    )\n  ] | order(views desc) {\n    _id,\n    title,\n    slug,\n    _createdAt,\n    creator -> {\n      _id,\n      creator_name,\n      image,\n      bio,\n      username\n    },\n    views,\n    description,\n    category,\n    image\n  }": POSTS_QUERYResult;
    "\n  *[_type == \"posts\" && _id == $id][0]{\n    _id,\n    title,\n    slug,\n    _createdAt,\n    creator -> {\n      _id,\n      creator_name,\n      username,\n      image,\n      bio\n    },\n    views,\n    description,\n    category,\n    image,\n    details\n  }\n": POST_BY_ID_QUERYResult;
    "\n  *[_type == \"posts\" && _id == $id]{\n    views\n  }[0]\n": POST_VIEWS_QUERYResult;
    "\n  *[_type == \"creator\" && creatorId == $id][0]{\n    _id,\n    creatorId,\n    creator_name,\n    username,\n    email,\n    image,\n    bio\n  }\n": CREATOR_BY_CREATOR_ID_QUERYResult;
    "\n  *[_type == \"creator\" && _id == $id][0]{\n    _id,\n    creatorId,\n    creator_name,\n    username,\n    email,\n    image,\n    bio\n  }\n": CREATOR_BY_ID_QUERYResult;
    "\n  *[_type == \"posts\" && creator._ref == $id] | order(_createdAt desc) {\n    _id,\n    title,\n    slug,\n    _createdAt,\n    creator -> {\n      _id,\n      creator_name,\n      image,\n      bio,\n      username\n    },\n    views,\n    description,\n    category,\n    image\n  }\n": POSTS_BY_CREATOR_QUERYResult;
    "\n  *[_type == \"posts\" && category == $category] | order(_createdAt desc) {\n    _id,\n    title,\n    slug,\n    _createdAt,\n    creator -> {\n      _id,\n      creator_name,\n      image,\n      bio,\n      username\n    },\n    views,\n    description,\n    category,\n    image,\n    details\n  }\n": POSTS_BY_CATEGORY_QUERYResult;
  }
}
