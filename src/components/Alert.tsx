import type { FlowComponent } from "solid-js";
import { Alert as HeadlessAlert } from "solid-headless";

import * as styles from "./Alert.css";

export const Alert: FlowComponent = (props) => (
  <HeadlessAlert class={styles.alert}>{props.children}</HeadlessAlert>
);
