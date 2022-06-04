import { createStorageService } from "lagring";
import { Days } from "../types";

const StorageService = createStorageService({
  participating: false,
  avatar: "",
  data: [] as Days,
});

export { StorageService };
