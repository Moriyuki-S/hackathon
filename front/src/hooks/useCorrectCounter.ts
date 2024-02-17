import { useState } from "react";

export const useCorrectCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return {
        counter,
        increment
    };
};