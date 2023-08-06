import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  // 开启 attributify
  attributify: true,
  shortcuts: {
    "flex-c": "flex justify-between items-center",
  }
});
