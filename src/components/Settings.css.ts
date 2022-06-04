import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const container = style(
  {
    height: "100%",
    width: "100%",
    padding: "6px 0",
    margin: "0 auto",
    borderRadius: "12px",
    color: vars.color.primary,
    background: vars.background.default,
  },
  "container"
);

export const header = style(
  {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: "18px",
    gap: "18px",
  },
  "header"
);

export const title = style(
  {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  "title"
);

export const content = style(
  {
    height: "100%",
    width: "100%",
    padding: "6px 12px 0 12px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "12px",
  },
  "content"
);

export const avatar = style(
  {
    width: "75%",
    margin: "30% auto",
    border: vars.borders[0],
    borderRadius: "56px",
    boxShadow: vars.shadows[0],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "12px",
  },
  "avatar"
);

export const avatar_img = style(
  {
    width: "65% !important",
    height: "65% !important",
    borderRadius: "50%",
    margin: "6px auto 12px auto",
    display: "block",
    aspectRatio: "1",
  },
  "avatar_img"
);
