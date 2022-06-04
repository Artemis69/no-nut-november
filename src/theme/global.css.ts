import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./index.css";

globalStyle("body", {
  margin: 0,
  padding: 0,
  background: vars.background.secondary,
});

globalStyle("*", {
  boxSizing: "border-box",
  color: vars.color.primary,
});

globalStyle("#root", {
  color: vars.color.primary,
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr",
  fontFamily: `'NeverMind', sans-serif`,
});
