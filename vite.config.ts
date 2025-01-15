import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  theme_color: "#000000",
  background_color: "#000000",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  orientation: "any",
  display: "standalone",
  lang: "ru-RU",
  name: "pwa",
  short_name: "pwa",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{html, css, js, ico, png, svg}"],
      },
      manifest: manifest
    }),
  ],
});
