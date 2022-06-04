import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const alert = style({
  position: "fixed",
  top: "5rem",
  right: "2.7rem",
  zIndex: 30,
  boxShadow: vars.shadows[2],
  background: vars.background[0],
  borderRadius: "8px",
  padding: ".7rem .85rem",
  fontSize: "1.2rem",
  border: vars.borders[0],
});
