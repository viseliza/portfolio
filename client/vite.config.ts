import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
  ],
  preview: {
    port: 18100,
  },
  server: {
    port: 18100,
  },
});
