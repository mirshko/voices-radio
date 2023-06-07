import { groq } from "next-sanity";
import type { Image } from "sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

export interface Settings {
  title: string;
  description: string;
  ogImage: Image;
  address: string;
  contact_link: string;
  twitter_link: string;
  instagram_link: string;
  facebook_link: string;
  mixcloud_link: string;
  store_link: string;
}

export const partnersQuery = groq`*[_type == "partner"] | order(name desc)`;

export interface Partner {
  name: string;
  logo: Image;
  /**
   * PortableText
   */
  details: any[];
}

export const homeQuery = groq`*[_type == "home"][0]`;

export interface Home {
  schedule: string;

  community_heading: string;
  community_subheading: string;
  community_cta_text: string;
  community_cta_url: string;
  community_carousel: Image[];

  community_heading_secondary: string;
  community_subheading_secondary: string;
  community_cta_text_secondary: string;
  community_cta_url_secondary: string;
  community_carousel_secondary: Image[];

  apply_background: Image;
  apply_heading: string;
  apply_subheading: string;
  apply_cta_text: string;
  apply_cta_url: string;
}

export const aboutQuery = groq`*[_type == "about"][0]`;

export interface About {
  heading: string;
  subheading: string;
  cta_text?: string;
  cta_url?: string;
  carousel: Image[];

  heading_secondary: string;
  subheading_secondary: string;
  cta_text_secondary?: string;
  cta_url_secondary?: string;
  carousel_secondary: Image[];
}
