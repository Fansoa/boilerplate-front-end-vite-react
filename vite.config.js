import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./configs/vitest/setup.js"],
    testMatch: ["./src/components/*.test.jsx"],
    globals: true,
    coverage: {
      reporter: ["text"],
      reportsDirectory: "./configs/vitest/coverage/",
    },
  },
});
