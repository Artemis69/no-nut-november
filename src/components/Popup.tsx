import type { Component, JSXElement, Setter } from "solid-js";
import Dismiss from "solid-dismiss";
import { createSignal, Show } from "solid-js";
import { Icon, Icons } from ".";

import * as styles from "./Popup.css";

interface UserPopupProps {
  avatar?: string;
  children: (setOpen: Setter<boolean>) => JSXElement;
}

export const UserPopup: Component<UserPopupProps> = (props) => {
  const [open, setOpen] = createSignal(false);
  let btnEl!: HTMLButtonElement;

  return (
    <div class={styles.container}>
      <button
        type="button"
        class={styles.popup_button}
        ref={btnEl}
        aria-label="Settings"
      >
        <Show
          when={!props.avatar}
          fallback={() => (
            <img class={styles.avatar} src={props.avatar} aria-hidden="true" />
          )}
        >
          <Icon aria-hidden="true" class={styles.avatar}>
            <Icons.user />
          </Icon>
        </Show>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15.25 10.75L12 14.25L8.75 10.75"
          />
        </svg>
      </button>
      <Dismiss menuButton={btnEl} open={open} setOpen={setOpen}>
        <div class={styles.popup}>{props.children(setOpen)}</div>
      </Dismiss>
    </div>
  );
};
