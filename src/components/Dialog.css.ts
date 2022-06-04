import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

const dialogZIndex = 10;

export const dialog = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: dialogZIndex,
  overflowY: "auto",
});

export const dialogOverlay = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: "#00000095",
  minHeight: "calc(100vh + env(safe-area-inset-bottom, 4rem))",
});

export const container = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const dialogPanel = style({
  width: "100%",
  maxWidth: "45vw",
  overflow: "hidden",
  background: vars.background[0],
  borderRadius: "12px",
  zIndex: dialogZIndex + 1,
  padding: ".7rem",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "40% 1fr",
  "@media": {
    "(max-width: 1012px)": {
      maxWidth: "95vw",
      gridTemplateColumns: "1fr",
    },
  },
});

export const close = style({
  position: "absolute",
  right: ".55rem",
  top: ".55rem",
  cursor: "pointer",
  border: "none",
  background: vars.background.default,
  color: vars.color.primary,
  borderRadius: "6px",
  ":hover": {
    background: vars.background.secondary,
  },
  "@media": {
    "(max-width: 1012px)": {
      display: "none",
    },
  },
});

export const choose_variants_block = style({
  display: "grid",
  gap: ".7rem",
  padding: ".7rem",
  borderRadius: "12px",
  background: vars.background.secondary,
  border: vars.borders[0],
  boxShadow: vars.shadows[0],
});

export const save_block = style({
  height: "100%",
  display: "grid",
  gridTemplateRows: "1fr auto",
  padding: "1.4rem 1.4rem .7rem 1.4rem",
});

export const apply_button = style({
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
    boxShadow: `0 1px 2px 0 #dd5277`,
  },
});

export const apply_button_close = style({
  background: "#4285F4",
  ":hover": {
    background: "#3a7de0",
    boxShadow: `0 1px 0 0 #3a7de0`,
  },
});

export const cell_selected = style({
  boxShadow: vars.shadows[2],
});
