import { defineType, defineField } from "sanity"
import { FaUser } from "react-icons/fa"

export const creator = defineType({
  name: "creator",
  title: "Creator",
  type: "document",
  icon: FaUser,
  fields: [
    defineField({
      name: "creatorId",
      title: "Creator ID",
      type: "number",
    }),
    defineField({
      name: "creator_name",
      title: "Creator Name",
      type: "string",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "creator_name",
    },
  },
})
