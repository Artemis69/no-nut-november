import type { VoidComponent } from "solid-js";
import { useNavigate } from "solid-app-router";
import { StorageService } from "../lib";

import { LinkButton, Icon, Icons } from ".";

import * as styles from "./Settings.css";

const Settings: VoidComponent = () => {
  const isParticipating = StorageService.get("participating");

  if (!isParticipating) {
    const navigate = useNavigate();

    navigate("/", {
      replace: true,
    });
  }

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <LinkButton href="/dashboard" aria-label="Go to Dashboard">
          <Icon children={Icons.arrowLeft} />
        </LinkButton>
        <span class={styles.title}>Settings</span>
      </header>
      <div class={styles.content}>
        <p>Empty</p>
      </div>
    </div>
  );
};

export default Settings;
