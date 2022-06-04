import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const container = style({
  height: "100%",
  width: "100%",
  padding: "6px 0",
  margin: "0 auto",
  borderRadius: "12px",
  color: vars.color.primary,
  background: vars.background.default,
});

export const header = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 18px 0 0",
});

globalStyle(`.${header} > a`, {
  position: "absolute",
  left: 0,
  top: 0,
});

export const title = style({
  fontSize: "1.5rem",
  marginTop: "4px",
  fontWeight: "bold",
});

export const content = style({
  height: "100%",
  width: "100%",
  padding: "6px 12px 0 12px",
});
