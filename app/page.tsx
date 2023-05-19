import { getSettings } from "@/sanity.client";
import { urlForImage } from "@/sanity.image";
import { Metadata } from "next";

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, ogImage } = await getSettings();

  const imageUrl = urlForImage(ogImage)
    .width(1200)
    .height(627)
    .fit("crop")
    .url();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: title,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 627,
        },
      ],
    },
  };
}

export default async function Home() {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
