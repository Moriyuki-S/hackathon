import { useState } from "react";
import { redirect } from "react-router-dom";

const MAX_LIFE_POINT = 5;
const MIN_LIFE_POINT = 0;

export const useLifeCounter = () => {
    const [life, setLife] = useState(MAX_LIFE_POINT);

    const decrement = () => {
        setLife(life - 1);
        if (life < MIN_LIFE_POINT) {
            redirect('/');
        }
    };

    const resetLife = () => {
        setLife(MAX_LIFE_POINT);
    }

    return {
        life,
        decrement,
        resetLife
    };
}