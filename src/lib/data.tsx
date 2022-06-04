import type { FlowComponent } from "solid-js";
import { createContext, useContext, createSignal } from "solid-js";
import { StorageService } from ".";

const DataContext = createContext({
  getAvatar: () => StorageService.get("avatar"),
  setAvatar: (value: string | null) => {
    if (value === null) {
      StorageService.remove("avatar");
    } else {
      StorageService.set("avatar", value);
    }
  },
});

const DataProvider: FlowComponent = (props) => {
  const [avatar, setAvatar] = createSignal(StorageService.get("avatar"));

  const value = {
    getAvatar: avatar,
    setAvatar: (value: string | null) => {
      setAvatar(value);

      if (value === null) {
        StorageService.remove("avatar");
      } else {
        StorageService.set("avatar", value);
      }
    },
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
