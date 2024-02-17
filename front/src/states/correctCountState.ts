import { atom } from "recoil";

export const CorrectCountState = atom<number>({
    key: 'correctCountState',
    default: 0,
});