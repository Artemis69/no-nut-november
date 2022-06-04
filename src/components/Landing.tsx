import type { VoidComponent } from "solid-js";
import { LoginButton } from ".";
import { useNavigate } from "solid-app-router";
import { StorageService } from "../lib";

import * as styles from "./Landing.css";

import logo from "../assets/logo.svg";

export const Landing: VoidComponent = () => {
  const isParticipating = StorageService.get("participating");

  if (isParticipating === true) {
    const navigate = useNavigate();

    navigate("/dashboard", {
      replace: true,
    });
  }

  return (
    <div class={styles.container}>
      <img class={styles.logo} src={logo} alt="Crossed out nut" />
      <div class={styles.promo}>
        <h1 class={styles.title} translate="no">
          No Nut November
        </h1>
        <p class={styles.subtitle}>
          No Nut November is an internet challenge revolving around abstinence,
          in which participants abstain from masturbation and orgasming during
          the month of November
        </p>
        <LoginButton style="big">Participate</LoginButton>
      </div>
    </div>
  );
};
