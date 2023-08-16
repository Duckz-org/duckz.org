import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

import sitemap from "@astrojs/sitemap";

// config gets evaluated before .env files, so need to use Vite's loadEnv
const { PUBLIC_BASE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_BASE_URL,
  integrations: [sitemap()]
});