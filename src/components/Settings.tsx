import type { VoidComponent } from "solid-js";
import { createSignal, Show, Switch, Match } from "solid-js";
import { useNavigate } from "solid-app-router";
import { StorageService, useData } from "../lib";

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
  const [avatar, setAvatar] = createSignal(data.getAvatar());

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
              <Show
                when={avatar()}
                fallback={
                  <Icon class={styles.avatar_img} children={Icons.user} />
                }
              >
                <img class={styles.avatar_img} src={avatar()!} />
              </Show>
              <Button
                onClick={() => {
                  setCurrent("avatar");
                  openModal();
                }}
              >
                Change
              </Button>
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
          <DialogPanel class={dialog_styles.dialogPanel}>
            <form
              onSubmit={(event) => {
                event.preventDefault();

                const input = event.target.querySelector("input")!;

                const { value } = input;

                data.setAvatar(value);
                setAvatar(value);

                closeModal();
              }}
            >
              <input
                type="url"
                required={true}
                value={avatar() || ""}
                placeholder="URL of avatar"
              />
              <Button type="submit">Save</Button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Settings;
