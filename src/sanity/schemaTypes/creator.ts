import { defineType, defineField } from "sanity"
import { FaUser } from "react-icons/fa"

export const creator = defineType({
    name: "creator",
    title: "Creator",
    type: "document",
    icon: FaUser,
    fields: [
        defineField({
            name: "id",  type: "number"
        }),
        defineField({
            name: "creator_name", type: "string"
        }),
        defineField({
            name: "username", type: "string"
        }),
        defineField({
            name: "email", type: "string"
        }),
        defineField({
            name: "image", type: "url"
        }),
        defineField({
            name: "bio", type: "string"
        }),
    ],
   preview: {
    select: {
      title: "creator_name",
      media: "image",
    },
  },
})