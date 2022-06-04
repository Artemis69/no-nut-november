import type { FlowComponent } from "solid-js";
import type { LinkProps } from "solid-app-router";
import { Link } from "solid-app-router";

import * as styles from "./Button.css";

export const Button: FlowComponent = (props) => {
  return (
    <button type="button" class={styles.button}>
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
