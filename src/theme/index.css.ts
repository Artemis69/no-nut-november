import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

export const [light_theme, vars] = createTheme({
  color: {
    primary: "#000000E4",
    secondary: "#0000009B",
  },
  background: {
    0: "#fff",
    default: "#fff",
    secondary: "#f5f5f5",
    success: `#DFF6DD`,
    critical: `#FDE7E9`,
    caution: `#FFF4CE`,
  },
  shadows: {
    0: `0px 2px 4px rgba(0, 0, 0, 0.04)`,
    1: `0px 4px 8px rgba(0, 0, 0, 0.14)`,
    2: `0px 8px 16px rgba(0, 0, 0, 0.14)`,
  },
  borders: {
    0: `1px solid rgba(0, 0, 0, 0.0578)`,
  },
});

export const dark_theme = createTheme(vars, {
  color: {
    primary: "#e9e9e9",
    secondary: "#eee",
  },
  background: {
    0: "#181818",
    default: "#181818",
    secondary: "#0e0e0e",
    success: `#393D1B`,
    critical: `#442726`,
    caution: `#433519`,
  },
  shadows: {
    0: `0px 2px 4px rgba(0, 0, 0, 0.13)`,
    1: `0px 4px 8px rgba(0, 0, 0, 0.26)`,
    2: `0px 8px 16px rgba(0, 0, 0, 0.14)`,
  },
  borders: {
    0: `1px solid #ffffff1f`,
  },
});
