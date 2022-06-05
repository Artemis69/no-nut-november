import type { FlowComponent, JSX } from "solid-js";
import type { LinkProps } from "solid-app-router";
import { splitProps } from "solid-js";
import { Link } from "solid-app-router";

import * as styles from "./Button.css";

type NativeButtonAttrs = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
};

export const Button: FlowComponent<NativeButtonAttrs> = ($props) => {
  const [props, rest] = splitProps($props, ["primary"]);

  return (
    <button
      type="button"
      {...rest}
      class={styles.button}
      classList={{ [styles.primary]: props.primary }}
    >
      {rest.children}
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
