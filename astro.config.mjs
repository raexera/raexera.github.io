import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://raexera.is-a.dev",
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
