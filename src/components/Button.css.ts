import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const button = style(
  {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    rowGap: "6px",
    gap: "6px",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    whiteSpace: "nowrap",
    overflow: ["hidden", "clip"],
    textOverflow: "ellipsis",
    textDecoration: "none",
    padding: "0 14px",
    margin: "0 6px",
    border: "1px solid #0000",
    borderRadius: "6px",
    lineHeight: "100%",
    height: "36px",
    textShadow: `1px 1px 4px rgb(0 0 0 / 9%)`,
    background: vars.background.secondary,
    color: vars.color.primary,
    ":hover": {
      background: "#E3E3E3",
    },
    ":active": {
      background: "#D2D2D2",
    },
    "@media": {
      "(prefers-color-scheme: dark)": {
        background: "#101010",
        ":hover": {
          background: "#0F0F0F",
        },
        ":active": {
          background: "#0D0D0D",
        },
      },
    },
  },
  "button"
);

export const primary = style({
  color: "#fff",
  textShadow: `1px 1px 4px rgb(0 0 0 / 9%)`,
  background: "#e73570 !important",
  ":hover": {
    background: "#dd5277 !important",
  },
});
