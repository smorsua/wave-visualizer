import { useEffect, useRef } from "react";
import { Controls } from "./Controls";
import { useP5 } from "./useP5";

const controls = [
    {
        id: "frecuency",
        name: "Frecuency",
        min: 0,
        max: 10,
    },
    {
        id: "amplitude",
        name: "Amplitude",
        min: 0,
        max: 10,
    },
    {
        id: "phase",
        name: "Phase",
        min: 0,
        max: 10,
    },
];

export const WaveVisualizer = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;

        if (canvas === null) {
            console.log("canvas is null");
            return;
        }

        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            console.log("2d ctx is null");
            return;
        }

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 50, 50);
    }, []);

    return (
        <div className="flex gap-5 [&>*]:shadow-xl">
            <canvas
                className="flex-grow-0"
                ref={ref}
                width={600}
                height={300}
            ></canvas>
            {/* <Controls
                controls={controls}
                onChange={(ev) => {}}
            /> */}
        </div>
    );
};
