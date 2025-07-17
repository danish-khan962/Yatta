import { defineType, defineField } from "sanity";
import { IoImages } from "react-icons/io5";

export const posts = defineType({
  name: "posts",
  title: "Posts",
  type: "document",
  icon: IoImages,
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "creator",
      type: "reference",
      to: [{ type: "creator" }], 
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category.."),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      type: "markdown",
    }),
  ],
});
