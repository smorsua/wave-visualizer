import { LabeledDialKnob } from "../LabeledDialKnob";

type DialData = {
    readonly id: string;
    readonly name: string;
    readonly min: number;
    readonly max: number;
};

type DialEvent<T extends DialData> = {
    readonly id: T["id"];
    readonly value: number;
};

type Props<T extends DialData> = {
    controls: T[];
    onChange: (ev: DialEvent<T>) => void;
};

export const Controls = <const T extends DialData>({
    controls,
    onChange,
}: Props<T>) => {
    return (
        <div className="flex flex-col gap-8 rounded-2xl bg-slate-800 p-6">
            {controls.map((item) => {
                return (
                    <LabeledDialKnob
                        key={item.id}
                        label={item.name}
                        min={item.min}
                        max={item.max}
                        onChange={(value) => onChange({ id: item.id, value })}
                    />
                );
            })}
        </div>
    );
};
