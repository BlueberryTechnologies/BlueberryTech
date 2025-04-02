import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import { HeaderSimple } from "./Header/Header";
import { MantineProvider } from "@mantine/core";
import { MercuryStatsRing } from "./Stats/MercuryStatsRing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <HeaderSimple />
      <MercuryStatsRing />
    </MantineProvider>
  </StrictMode>
);
