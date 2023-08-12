import { useEffect, useId, useLayoutEffect } from "react";
import p5 from "p5";

export function useP5(
    setup: (sketch: any) => void,
    draw: (sketch: any) => void
) {
    const id = useId();

    useEffect(() => {
        const parentElement = document.getElementById(id);
        if (parentElement === null) {
            console.error("parent element is null");
            return;
        }

        const myp5 = new p5((sketch) => {
            sketch.setup = () => setup(sketch);
            sketch.draw = () => draw(sketch);
        }, parentElement);

        return () => {
            for (const child of parentElement.childNodes) {
                parentElement.removeChild(child);
            }
        };
    }, [id, setup, draw]);

    return id;
}
