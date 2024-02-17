import { atom } from "recoil";

export const themeAnimal = atom<string>({
    key: "themeAnimal",
    default: "",
});