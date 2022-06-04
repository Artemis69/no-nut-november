import type { VoidComponent } from "solid-js";
import type { Day, Days } from "../types";
import clsx from "clsx";

import {
  Dialog,
  DialogPanel,
  DialogOverlay,
  DialogTitle,
} from "solid-headless";
import { createSignal, For, Show, Switch, Match } from "solid-js";
import { createStore } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { Alert, Icon, Icons } from ".";

import { is, StorageService } from "../lib";

import * as styles from "./Table.css";
import * as dialog_styles from "./Dialog.css";

interface TableProps {
  days: Days;
  empty: number;
}

export const Table: VoidComponent<TableProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [store, setStore] = createStore(props.days);

  const [isAlertOpen, setIsAlertOpen] = createSignal(false);
  const [alertContent, setAlertContent] = createSignal("");

  const openAlert = () => {
    setIsAlertOpen(true);

    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  const currentDate = new Date().getUTCDate();

  const [selected, setSelected] = createSignal<Day["status"]>("answer later");

  const closeModal = () => {
    setIsOpen(false);
    setSelected("answer later");
  };

  const handleDialogApplyClick = () => {
    if (selected() === "answer later") {
      closeModal();
      return;
    }

    const curr = store[currentDate - 1];

    if (!is(curr.status, "pending", "answer later", "passed")) {
      closeModal();

      setAlertContent("Could not be updated!");

      openAlert();

      return;
    }

    setStore(currentDate - 1, (prev) => {
      return {
        ...prev,
        status: selected(),
      };
    });

    StorageService.set("data", store);

    closeModal();

    setAlertContent("Successfully saved!");

    openAlert();
  };

  return (
    <>
      <div class={styles.head}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayOfWeek) => (
          <span>{dayOfWeek}</span>
        ))}
      </div>
      <div class={styles.body}>
        {Array.from({ length: props.empty }).map((_, i) => (
          <div class={styles.placeholder} />
        ))}
        <For each={store}>
          {(day) => (
            <>
              <Dynamic
                component={day.day === currentDate ? "button" : "div"}
                type={day.day === currentDate ? "button" : null}
                class={clsx(
                  styles.cell,
                  day.status === "passed" && styles.cell_status_passed,
                  day.status === "failed" && styles.cell_status_failed,
                  day.status === "missed" && styles.cell_status_missed,
                  day.status === "not available yet" &&
                    styles.cell_status_notAvailableYet,
                  day.day === currentDate && styles.cell_button_reset,
                  day.day === currentDate && styles.cell_button
                )}
                classList={{
                  [styles.cell_current]:
                    day.day === currentDate && day.status === "pending",
                }}
                aria-label={
                  day.day === currentDate
                    ? "Open the value setting dialog box"
                    : null
                }
                onClick={() => {
                  if (day.day === currentDate) {
                    setIsOpen(true);
                  }
                }}
              >
                <span class={styles.cell_day}>
                  {day.day}
                  <Show when={day.status !== "not available yet"}>
                    <Icon>
                      <Switch>
                        <Match when={day.status === "passed"}>
                          <Icons.check />
                        </Match>
                        <Match
                          when={
                            day.status === "failed" || day.status === "missed"
                          }
                        >
                          <Icons.failure />
                        </Match>
                        <Match when={day.status === "pending"}>
                          <Icons.clock />
                        </Match>
                      </Switch>
                    </Icon>
                  </Show>
                </span>
                <span>{day.status}</span>
              </Dynamic>
            </>
          )}
        </For>
      </div>
      <Dialog
        isOpen={isOpen()}
        class={dialog_styles.dialog}
        onClose={closeModal}
      >
        <DialogOverlay class={dialog_styles.dialogOverlay} />
        <div class={dialog_styles.container}>
          <DialogPanel class={dialog_styles.dialogPanel}>
            <div class={dialog_styles.choose_variants_block}>
              <button
                type="button"
                class={clsx(
                  styles.cell,
                  styles.cell_button_reset,
                  styles.cell_status_answer_later,
                  styles.cell_button,
                  selected() === "answer later" && dialog_styles.cell_selected
                )}
                onClick={() => setSelected("answer later")}
              >
                <span class={styles.cell_day}>
                  Answer later
                  <Icon>
                    {selected() === "answer later" && <Icons.check />}
                  </Icon>
                </span>
                <span>I will answer later today</span>
              </button>
              <button
                type="button"
                class={clsx(
                  styles.cell,
                  styles.cell_button_reset,
                  styles.cell_status_passed,
                  styles.cell_button,
                  selected() === "passed" && dialog_styles.cell_selected
                )}
                onClick={() => setSelected("passed")}
              >
                <span class={styles.cell_day}>
                  Passed
                  <Icon>{selected() === "passed" && <Icons.check />}</Icon>
                </span>
                <span>I have passed challenge today</span>
              </button>
              <button
                type="button"
                class={clsx(
                  styles.cell,
                  styles.cell_button_reset,
                  styles.cell_status_failed,
                  styles.cell_button,
                  selected() === "failed" && dialog_styles.cell_selected
                )}
                onClick={() => setSelected("failed")}
              >
                <span class={styles.cell_day}>
                  Failed
                  <Icon>{selected() === "failed" && <Icons.check />}</Icon>
                </span>
                <span>I have failed challenge today</span>
              </button>
            </div>
            <div class={dialog_styles.save_block}>
              <div>
                <DialogTitle as="h3">
                  Select your progress for today
                </DialogTitle>
                <p>
                  Be careful! If you select "fail" and save, you cannot undo the
                  changes later
                </p>
              </div>
              <button
                type="submit"
                class={clsx(dialog_styles.apply_button)}
                onClick={handleDialogApplyClick}
                classList={{
                  [dialog_styles.apply_button_close]:
                    selected() === "answer later",
                }}
              >
                {selected() === "answer later" ? "Close" : "Save"}
              </button>
            </div>
            <button
              type="button"
              aria-label="Close dialog"
              class={dialog_styles.close}
              onClick={closeModal}
            >
              <Icon>
                <Icons.cross />
              </Icon>
            </button>
          </DialogPanel>
        </div>
      </Dialog>
      <Show when={isAlertOpen()}>
        <Alert>
          <span>{alertContent()}</span>
        </Alert>
      </Show>
    </>
  );
};
