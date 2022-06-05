import type { VoidComponent } from "solid-js";
import { createSignal, Show, Switch, Match } from "solid-js";
import { useNavigate } from "solid-app-router";
import { StorageService, useData, readFile, processAvatar } from "../lib";

import {
  Dialog,
  DialogPanel,
  DialogOverlay,
  DialogTitle,
} from "solid-headless";

import { LinkButton, Button, Icon, Icons } from ".";

import * as styles from "./Settings.css";
import * as dialog_styles from "./Dialog.css";

const Settings: VoidComponent = () => {
  const isParticipating = StorageService.get("participating");

  if (!isParticipating) {
    const navigate = useNavigate();

    navigate("/", {
      replace: true,
    });
  }

  const data = useData();

  const [isOpen, setIsOpen] = createSignal(false);
  const [current, setCurrent] = createSignal("avatar");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div class={styles.container}>
        <header class={styles.header}>
          <LinkButton href="/dashboard" aria-label="Go to Dashboard">
            <Icon children={Icons.arrowLeft} />
          </LinkButton>
          <span class={styles.title}>Settings</span>
        </header>
        <div class={styles.content}>
          <div>
            <div class={styles.avatar}>
              <label class={styles.avatar_label}>
                <Show
                  when={data.getAvatar()}
                  fallback={
                    <Icon class={styles.avatar_img} children={Icons.user} />
                  }
                >
                  <img
                    class={styles.avatar_img}
                    src={data.getAvatar()!}
                    alt=""
                  />
                </Show>
                <span>Select image</span>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/svg+xml, image/webp"
                  onInput={async (event) => {
                    console.time("Process Avatar");

                    const file = await readFile(event);

                    if (!file) return;

                    const avatar = await processAvatar(file);

                    if (!avatar) return;

                    console.timeEnd("Process Avatar");

                    data.setAvatar(avatar);
                  }}
                />
              </label>

              <div>
                <Button
                  onClick={() => {
                    data.setAvatar(null);
                  }}
                >
                  Remove Avatar
                </Button>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Dialog
        isOpen={isOpen()}
        class={dialog_styles.dialog}
        onClose={closeModal}
      >
        <DialogOverlay class={dialog_styles.dialogOverlay} />
        <div class={dialog_styles.container}>
          <DialogPanel class={dialog_styles.dialogPanel}>Dialog</DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Settings;
