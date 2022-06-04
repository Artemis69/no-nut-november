import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const header = style({
  width: "100%",
  padding: ".9rem 2.7rem",
  boxShadow: vars.shadows[0],
  display: "flex",
  justifyContent: "flex-end",
  background: vars.background.default,
  "@media": {
    "(max-width: 784px)": {
      padding: ".9rem 1.35rem",
    },
  },
});

export const main = style({
  minHeight: "100%",
  padding: "2.7rem",
  "@media": {
    "(max-width: 784px)": {
      padding: "1.35rem",
    },
    "(prefers-color-scheme: light) and (min-width: 784px)": {
      /**
       * Like a fancy gradient background
       */
      backgroundImage: `radial-gradient(at 20% 50%, #E7D3CF, transparent 35%), radial-gradient(at 40% 50%, #EEEDE7, transparent 35%), radial-gradient(at 60% 50%, #E1F1EB, transparent 35%), radial-gradient(at 80% 50%, #C4DEE1, transparent 35%)`,
    },
  },
});
