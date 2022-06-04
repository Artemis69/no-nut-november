import type { VoidComponent } from "solid-js";
import { Show } from "solid-js";
import { Routes, Route, useLocation } from "solid-app-router";
import {
  UserPopup,
  LoginButton,
  LogoutButton,
  Landing,
  LinkButton,
  Icon,
  Icons,
} from ".";

import App from "./App";
import Settings from "./Settings";

import * as styles from "./Root.css";

export const Root: VoidComponent = () => {
  const location = useLocation();
  const path = () => location.pathname;

  return (
    <>
      <header class={styles.header}>
        <Show
          when={path().includes("/dashboard") || path().includes("/settings")}
          fallback={() => <LoginButton>Participate</LoginButton>}
        >
          <UserPopup>
            {(setOpen) => (
              <>
                <LogoutButton />
                <LinkButton href="/settings" onClick={() => setOpen(false)}>
                  Settings <Icon children={Icons.settings}></Icon>
                </LinkButton>
              </>
            )}
          </UserPopup>
        </Show>
      </header>
      <main class={styles.main}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<App />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  );
};
