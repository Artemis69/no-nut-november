const p = (s: string) => "(" + s + ")";
const pcs = "prefers-color-scheme";

const colorSchemesSupported = matchMedia(p(pcs)).media !== "not all";
const darkModeMQ = matchMedia(p(pcs + ": dark"));

const subscribe = (sub: (value: "dark" | "light") => void) => {
  const onMediaQueryChange = (e: MediaQueryList | MediaQueryListEvent) => {
    sub(colorSchemesSupported ? (e.matches ? "dark" : "light") : "light");
  };

  const isModern = typeof darkModeMQ.addEventListener === "function";

  onMediaQueryChange(darkModeMQ);

  isModern
    ? darkModeMQ.addEventListener("change", onMediaQueryChange)
    : darkModeMQ.addListener(onMediaQueryChange);

  return () => {
    isModern
      ? darkModeMQ.removeEventListener("change", onMediaQueryChange)
      : darkModeMQ.removeListener(onMediaQueryChange);
  };
};

export { subscribe };
