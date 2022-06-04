import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const logo = style({
  aspectRatio: "1 / 1",
  maxWidth: "40vmin",
  maxHeight: "40vmin",
  margin: "0 auto",
  "@media": {
    "(max-width: 560px)": {
      maxWidth: "60vw",
      maxHeight: "60vw",
    },
  },
});

export const container = style({
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignContent: "center",
  "@media": {
    "(max-width: 560px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  zIndex: 3,
});

export const title = style({
  fontSize: "4.5rem",
  fontWeight: "bold",
  color: vars.color.primary,
  textAlign: "center",
  margin: "0 auto",
  "@media": {
    "(max-width: 560px)": {
      fontSize: "2.5rem",
    },
  },
});

export const subtitle = style({
  margin: "1rem auto",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: vars.color.primary,
  textAlign: "justify",
  "@media": {
    "(max-width: 560px)": {
      /**
       * This is a very weird design choice
       */
      textAlign: "center",
    },
    "(min-width: 1120px)": {
      maxWidth: "40vw",
    },
  },
});

export const promo = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
