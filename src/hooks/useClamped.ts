import { useEffect, useState } from "react";

function clamp(value: number, min: number, max: number) {
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    }
}

export function useClamped(initialValue: number, min: number, max: number) {
    const [value, setValue] = useState(() => clamp(initialValue, min, max));

    useEffect(() => {
        if (min > max) {
            console.warn(`min (${min}) is bigger than max (${max})`);
        }
    }, [min, max]);

    return [
        value,
        (valueUpdater: number | ((prev: number) => number)) => {
            if (typeof valueUpdater === "function") {
                setValue((prev) => clamp(valueUpdater(prev), min, max));
            } else {
                setValue(clamp(valueUpdater, min, max));
            }
        },
    ] as const;
}
