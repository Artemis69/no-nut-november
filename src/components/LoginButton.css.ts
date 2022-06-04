import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const button = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
  whiteSpace: "nowrap",
  textDecoration: "none",
  padding: "0 14px",
  border: "1px solid #0000",
  borderRadius: "6px",
  lineHeight: "100%",
  height: "36px",
  color: "#fff",
  textShadow: `1px 1px 4px rgb(0 0 0 / 9%)`,
  background: "#e73570",
  ":hover": {
    background: "#dd5277",
  },
});

export const big = style({
  height: "52px",
  padding: "12px 36px",
  fontSize: "1.5rem",
  lineHeight: "1.5",
  ":hover": {
    boxShadow: `0 1px 2px 0 #dd5277`,
  },
});
