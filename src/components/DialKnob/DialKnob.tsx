import { useEffect, useState } from "react";
import { KnobFront } from "./KnobFront";
import { useDial } from "./useDial";

type Props = {
    min: number;
    max: number;
    onChange: (v: number) => void;
};

export const DialKnob = ({ min, max, onChange }: Props) => {
    const { value, rotation, handleWheel, handleMouseDown } = useDial(min, max);

    // Event listener
    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <svg
            width={80}
            height={80}
            viewBox="0 0 100 100"
            onWheel={(ev) => handleWheel(ev.deltaY)}
            onMouseDown={(ev) => handleMouseDown(ev)}
        >
            <ellipse
                cx="50"
                cy="50"
                rx="50"
                ry="50"
                fill="#BDBDBD"
            />
            <KnobFront rotation={rotation} />
        </svg>
    );
};
