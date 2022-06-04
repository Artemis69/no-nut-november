import type { VoidComponent } from "solid-js";

import { Table } from ".";
import { useNavigate } from "solid-app-router";
import { StorageService, createData, is } from "../lib";

import * as styles from "./App.css";

const App: VoidComponent = () => {
  const isParticipating = StorageService.get("participating");

  if (!isParticipating) {
    const navigate = useNavigate();

    navigate("/", {
      replace: true,
    });
  }

  const empty = new Date();
  empty.setDate(1);

  const current = StorageService.get("data");

  if (!current || (Array.isArray(current) && current.length === 0)) {
    /**
     * No data saved in localStorage
     */

    StorageService.set("data", createData());
  } else {
    /**
     * We have some data in localStorage!!
     */

    const date = new Date().getUTCDate();

    const today = current[date - 1];

    if (today.status === "not available yet") {
      today.status = "pending";
    }

    for (let i = 0; i < date - 1; i++) {
      const day = current[i];

      /**
       * When person go offline and do update values, we need to make them 'missed'
       */

      if (is(day.status, "not available yet", "answer later", "pending")) {
        day.status = "missed";
      }
    }

    StorageService.set("data", current);
  }

  return (
    <div class={styles.container}>
      <Table days={StorageService.get("data")!} empty={empty.getUTCDay()} />
    </div>
  );
};

export default App;
