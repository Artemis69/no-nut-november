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
  },
  "content"
);
