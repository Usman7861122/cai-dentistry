import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Full docs: https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Change this to your real domain before you deploy.
  site: "https://www.caidentistry.com",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
