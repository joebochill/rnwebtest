import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/300.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { blue } from "@brightlayer-ui/react-native-themes";
import { ThemeProvider } from "react-native-paper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SafeAreaProvider>
      <ThemeProvider theme={blue}>
      <App />
      </ThemeProvider>
    </SafeAreaProvider>
  </React.StrictMode>
);
