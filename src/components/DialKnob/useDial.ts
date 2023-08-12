import { useEffect, useMemo, useState } from "react";
import { useClamped } from "../../hooks/useClamped";
import { cartesianToPolar } from "./math";

const NUMBER_OF_STEPS = 50;

export function useDial(min: number, max: number) {
    // Starting value is the average
    const [value, setValue] = useClamped((max + min) / 2, min, max);

    // Value increment per scroll
    const scrollIncrement = useMemo(
        () => (max - min) / NUMBER_OF_STEPS,
        [min, max]
    );

    function handleWheel(deltaY: number) {
        const dir = deltaY > 0 ? 1 : -1;
        setValue((prev) => (prev += scrollIncrement * dir));
    }

    function handleMouseDown(ev: React.MouseEvent<SVGElement>) {
        // const clientMouse = { x: ev.clientX, y: ev.clientY };
        // const rect = ev.currentTarget.getBoundingClientRect();
        // const initialAngle = getAngle(clientMouse, rect);
        // const handleMouseMove = (ev: MouseEvent) => {
        //     const clientMouse = { x: ev.clientX, y: ev.clientY };
        //     const currentAngle = getAngle(clientMouse, rect);
        //     const deltaAngle = currentAngle - initialAngle;
        //     const a = currentAngle - initialAngle;
        //     console.log(((a + 180) % 360) - 180);
        // };
        // document.addEventListener("mousemove", handleMouseMove);
        // document.addEventListener("mouseup", () => {
        //     document.removeEventListener("mousemove", handleMouseMove);
        // });
    }

    // Rotation of the dial component
    const rotation = useMemo(
        () => ((value - min) / (max - min)) * 270 - 135,
        [min, max, value]
    );

    return { value, rotation, handleWheel, handleMouseDown };
}

function getAngle(clientMouse: { x: number; y: number }, rect: DOMRect) {
    const x = clientMouse.x - rect.left - rect.width / 2;
    const y = (clientMouse.y - rect.top) * -1 + rect.height / 2;
    return cartesianToPolar(x, y).theta;
}
