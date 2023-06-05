import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  // @ts-ignore
  icon: DocumentIcon,
  preview: {
    select: { title: "internal" },
  },
  fields: [
    defineField({
      name: "internal",
      initialValue: "About",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      description: "Heading for the Community section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      type: "text",
      title: "Subheading",
      description: "Subheading for the Community section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cta_text",
      title: "Button Text",
      description: "Button text for the Community section",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cta_url",
      title: "Button Link",
      description: "Button link for the Community section",
      type: "url",
      group: "apply",
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "carousel",
      title: "Communtiy Section - Carousel",
      type: "array",
      of: [{ type: "image", validation: (rule) => rule.required() }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading_secondary",
      type: "string",
      title: "Heading Secondary",
      description: "Heading for the Community section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading_secondary",
      type: "text",
      title: "Subheading Secondary",
      description: "Subheading for the Community section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cta_text_secondary",
      title: "Button Text Secondary",
      description: "Button text for the Community section",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cta_url_secondary",
      title: "Button Link Secondary",
      description: "Button link for the Community section",
      type: "url",
      group: "apply",
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "carousel_secondary",
      title: "Carousel Secondary",
      type: "array",
      of: [{ type: "image", validation: (rule) => rule.required() }],
      validation: (rule) => rule.required(),
    }),
  ],
});
