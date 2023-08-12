import { ComponentPropsWithoutRef } from "react";
import { DialKnob } from "./DialKnob/DialKnob";

type Props = { label: string } & ComponentPropsWithoutRef<typeof DialKnob>;

export const LabeledDialKnob = ({ label, ...dialProps }: Props) => {
    return (
        <div className="flex flex-col items-center gap-2 text-slate-400 text-xl font-mono">
            {label}
            <DialKnob {...dialProps} />
        </div>
    );
};
