import { style } from "@vanilla-extract/css";
import { vars } from "../theme/index.css";

export const head = style(
  {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: ".7rem",
    marginBottom: "1.4rem",
    "@media": {
      "(max-width: 1046px)": {
        display: "none",
      },
    },
  },
  "head"
);

export const placeholder = style(
  {
    "@media": {
      "(max-width: 1046px)": {
        display: "none",
      },
    },
  },
  "placeholder"
);

export const body = style(
  {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    gap: ".7rem",
    "@media": {
      "(max-width: 1046px)": {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
      },
    },
  },
  "body"
);

export const cell = style(
  {
    border: vars.borders[0],
    padding: "1.45rem",
    borderRadius: ".45rem",
    display: "grid",
    gridTemplateColumns: "2fr",
    gap: ".5rem",
  },
  "cell"
);

export const cell_day = style(
  {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  "day"
);

export const cell_status_passed = style(
  {
    background: vars.background.success,
  },
  "passed"
);

export const cell_status_failed = style(
  {
    background: vars.background.critical,
  },
  "failed"
);

export const cell_status_answer_later = style(
  {
    background: vars.background.default,
  },
  "answer_later"
);

export const cell_status_missed = style(
  {
    opacity: ".6",
  },
  "missed"
);

export const cell_status_notAvailableYet = style({}, "not_available_yet");

export const cell_current = style(
  {
    background: vars.background.caution,
  },
  "current"
);

export const cell_button_reset = style(
  {
    fontSize: "inherit",
    fontFamily: `'NeverMind', sans-serif`,
    textAlign: "initial",
  },
  "button_reset"
);

export const cell_button = style(
  {
    cursor: "pointer",
  },
  "button"
);
