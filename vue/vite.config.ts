import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathSrc
    }
  },
  base: process.env.NODE_ENV === "production" ? "/spine-vue/" : "",
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/scss/variables";` }
    }
  },
  server: {
    fs: {
      strict: true,
      allow: [".."]
    }
  }
});
