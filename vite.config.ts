import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    mockDevServerPlugin()
  ],
  server: {
    proxy: {
      '^/api': 'http://localhost:5173',
    },
  },
});
