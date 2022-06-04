import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";
import { useNavigate } from "solid-app-router";
import { StorageService, useData } from "../lib";

import { LinkButton, Button, Icon, Icons } from ".";

import * as styles from "./Settings.css";

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

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <LinkButton href="/dashboard" aria-label="Go to Dashboard">
          <Icon children={Icons.arrowLeft} />
        </LinkButton>
        <span class={styles.title}>Settings</span>
      </header>
      <div class={styles.content}>
        <input
          type="text"
          placeholder="Avatar URL"
          value={avatar() || ""}
          onInput={(e) => {
            const { value } = e.currentTarget;

            setAvatar(value);
          }}
        />
        <Button
          onClick={() => {
            try {
              new URL(avatar() || "");

              data.setAvatar(avatar());
            } catch (error) {
              console.error("This is not a valid URL");
            }
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Settings;
