import { render } from "solid-js/web";
import { Root } from "./components";
import { Router } from "solid-app-router";

import { DataProvider, colorScheme } from "./lib";

import { light_theme, dark_theme } from "./theme/index.css";
import "./theme/global.css";
import "./theme/fonts.css";

colorScheme((theme) => {
  if (theme === "light") {
    document.body.classList.remove(dark_theme);
    document.body.classList.add(light_theme);
  } else {
    document.body.classList.remove(light_theme);
    document.body.classList.add(dark_theme);
  }
});

render(
  () => (
    <DataProvider>
      <Router>
        <Root />
      </Router>
    </DataProvider>
  ),
  document.getElementById("root")!
);
