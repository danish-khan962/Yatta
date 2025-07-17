import { defineType, defineField } from "sanity";
import { IoImages } from "react-icons/io5";

export const posts = defineType({
  name: "posts",
  title: "Posts",
  type: "document",
  icon: IoImages,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "creator",
      type: "reference",
      title: "Creator",
      to: [{ type: "creator" }],
    }),
    defineField({
      name: "views",
      type: "number",
      title: "Views",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category.."),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      type: "markdown",
      title: "Post Details",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
