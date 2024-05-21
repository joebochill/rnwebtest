import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactNativeWeb from "vite-plugin-react-native-web";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),reactNativeWeb()],
  // resolve: {
  //   alias: {
  //     "react-native": "react-native-web",
  //   },
  // },
});
