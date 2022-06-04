import type { FlowComponent } from "solid-js";
import { Link } from "solid-app-router";
import { StorageService } from "../lib";
import clsx from "clsx";

import * as styles from "./LoginButton.css";

export const LoginButton: FlowComponent<{ style?: "big" }> = (props) => {
  return (
    <Link
      href="/dashboard"
      class={clsx(styles.button, props.style === "big" && styles.big)}
      onClick={() => StorageService.set("participating", true)}
    >
      {props.children}
    </Link>
  );
};
