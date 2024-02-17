import { atom } from "recoil";

export const ThemeAnimal = atom<string>({
    key: "themeAnimal",
    default: "",
});