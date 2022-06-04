import type { FlowComponent, JSX } from "solid-js";
import type { LinkProps } from "solid-app-router";
import { Link } from "solid-app-router";

import * as styles from "./Button.css";

type NativeButtonAttrs = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FlowComponent<NativeButtonAttrs> = (props) => {
  return (
    <button type="button" {...props} class={styles.button}>
      {props.children}
    </button>
  );
};

export const LinkButton: FlowComponent<LinkProps> = (props) => {
  return (
    <Link {...props} class={styles.button}>
      {props.children}
    </Link>
  );
};
