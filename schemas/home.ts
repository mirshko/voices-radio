import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  // @ts-ignore
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "community", title: "Community Section" },
    { name: "apply", title: "Apply Section" },
  ],
  preview: {
    select: { title: "internal" },
  },
  fields: [
    defineField({
      name: "internal",
      initialValue: "Home",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "schedule",
      title: "Hero Section - Schedule",
      group: "hero",
      description: "Hours and days when the station is live",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_heading",
      type: "string",
      title: "Community Section - Heading",
      description: "Heading for the Community section",
      group: "community",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_subheading",
      type: "text",
      title: "Community Section - Subheading",
      description: "Subheading for the Community section",
      group: "community",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_cta_text",
      title: "Community Section - Button Text",
      description: "Button text for the Community section",
      type: "string",
      group: "community",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_cta_url",
      title: "Community Section - Button Link",
      description: "Button link for the Community section",
      type: "url",
      group: "apply",
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "community_carousel",
      title: "Communtiy Section - Carousel",
      group: "community",
      type: "array",
      of: [{ type: "image", validation: (rule) => rule.required() }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_heading_secondary",
      type: "string",
      title: "Community Section - Heading Secondary",
      description: "Heading for the Community section",
      group: "community",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_subheading_secondary",
      type: "text",
      title: "Community Section - Subheading Secondary",
      description: "Subheading for the Community section",
      group: "community",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_cta_text_secondary",
      title: "Community Section - Button Text Secondary",
      description: "Button text for the Community section",
      type: "string",
      group: "community",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "community_cta_url_secondary",
      title: "Community Section - Button Link Secondary",
      description: "Button link for the Community section",
      type: "url",
      group: "apply",
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "community_carousel_secondary",
      title: "Communtiy Section - Carousel Secondary",
      group: "community",
      type: "array",
      of: [{ type: "image", validation: (rule) => rule.required() }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "apply_background",
      title: "Apply Section - Background Image",
      type: "image",
      description: "Background image for the Apply section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "apply_heading",
      title: "Apply Section - Heading",
      description: "Heading for the Apply section",
      group: "apply",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "apply_subheading",
      title: "Apply Section - Subheading",
      description: "Subheading for the Apply section",
      type: "text",
      group: "apply",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "apply_cta_text",
      title: "Apply Section - Button Text",
      description: "Button text for the Apply section",
      type: "string",
      group: "apply",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "apply_cta_url",
      title: "Apply Section - Button Link",
      description: "Button link for the Apply section",
      type: "url",
      group: "apply",
      validation: (rule) => rule.required().uri({ scheme: ["https"] }),
    }),
  ],
});
