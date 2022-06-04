import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const avatar = style({
  width: "26px",
  height: "26px",
  marginRight: ".35rem",
  borderRadius: "100%",
  objectFit: "cover",
});

export const popup_button = style({
  background: vars.background.default,
  ":hover": {
    background: vars.background.secondary,
    cursor: "pointer",
  },
  borderRadius: ".45rem",
  padding: ".35rem .45rem",
  border: "none",
  display: "flex",
});

export const container = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  "@media": {
    "(max-width: 784px)": {
      position: "static",
    },
  },
});

export const popup = style({
  position: "absolute",
  width: "25vw",
  transform: `translate(-100%, 1.4rem)`,
  background: vars.background[0],
  boxShadow: vars.shadows[2],
  padding: "1.4rem",
  borderRadius: "6px",
  zIndex: 10,
  "@media": {
    "(max-width: 784px)": {
      width: "auto",
      left: "1.4rem",
      right: "1.4rem",
      top: "5.4rem",
      transform: "none",
    },
  },
});
