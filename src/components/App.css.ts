import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const container = style({
  background: vars.background.default,
  padding: "2.7rem",
  borderRadius: "12px",
  height: "100%",
  "@media": {
    "(max-width: 784px)": {
      padding: "1.8rem",
    },
  },
});
