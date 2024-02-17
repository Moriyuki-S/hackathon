import {atom } from 'recoil';

export const incorrectCountState = atom<number>({
    key: 'incorrectCountState',
    default: 0,
});
