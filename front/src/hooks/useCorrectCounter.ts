import { useState } from "react";

export const useCorrectCounter = () => {
    const [counter, setCounter] = useState(0);

    const getCurrentCount = () => {
        return counter;
    };

    const increment = () => {
        setCounter(counter + 1);
    }

    return {
        getCurrentCount,
        increment
    };
};