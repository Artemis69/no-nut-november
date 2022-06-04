import type { Component, JSXElement, Setter } from "solid-js";
import Dismiss from "solid-dismiss";
import { createSignal, Show } from "solid-js";

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
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            fill="none"
            class={styles.avatar}
          >
            <circle
              cx="12"
              cy="8"
              r="3.25"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.848 19.25h10.305c1.141 0 2.021-.982 1.488-1.992C17.856 15.773 16.068 14 12 14s-5.856 1.773-6.64 3.258c-.534 1.01.346 1.992 1.487 1.992Z"
            />
          </svg>
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
