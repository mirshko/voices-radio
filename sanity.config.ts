import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { env } from "./env";
import { pageStructure, singletonPlugin } from "./plugins/settings";
import aboutType from "./schemas/about";
import homeType from "./schemas/home";
import partnerType from "./schemas/partner";
import settingsType from "./schemas/settings";

const schemaTypes = [settingsType, partnerType, homeType, aboutType];

export default defineConfig({
  basePath: "/studio",
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  title: "Studio",
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  schema: { types: schemaTypes },
  plugins: [
    deskTool({
      structure: pageStructure([settingsType, homeType, aboutType]),
    }),
    visionTool({}),
    singletonPlugin([settingsType.name, homeType.name, aboutType.name]),
  ],
});
