import type { VoidComponent } from "solid-js";
import { StorageService } from "../lib";
import { Link } from "solid-app-router";

import * as styles from "./LoginButton.css";

export const LogoutButton: VoidComponent = () => {
  return (
    <Link
      class={styles.button}
      href="/"
      onClick={() => {
        StorageService.set("data", []);
        StorageService.set("participating", false);
      }}
    >
      Reset
    </Link>
  );
};
