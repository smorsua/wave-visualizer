import { useEffect } from "react";

type Props = {
    rotation: number;
};

export function KnobFront({ rotation }: Props) {
    return (
        <g
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            transform={`translate(8, 13) rotate(${rotation})`}
        >
            <path
                d="M37.935 5.913c2.019-2.877 6.28-2.877 8.3 0A5.08 5.08 0 0053 7.343c3.008-1.803 6.909-.08 7.578 3.362.507 2.607 2.96 4.376 5.596 4.052 3.477-.428 6.345 2.73 5.552 6.142a5.051 5.051 0 003.455 5.968c3.353 1.018 4.682 5.07 2.566 7.863a5.036 5.036 0 00.72 6.85c2.653 2.294 2.203 6.533-.868 8.226a5.041 5.041 0 00-2.133 6.552c1.487 3.171-.66 6.857-4.15 7.158-2.644.23-4.675 2.469-4.627 5.123.064 3.504-3.396 5.997-6.71 4.858-2.513-.864-5.28.356-6.32 2.802-1.375 3.23-5.545 4.111-8.116 1.72a5.083 5.083 0 00-6.919 0c-2.57 2.391-6.74 1.51-8.114-1.72-1.04-2.446-3.808-3.666-6.321-2.802-3.314 1.14-6.774-1.354-6.71-4.858.048-2.654-1.983-4.894-4.628-5.123-3.49-.301-5.637-3.987-4.15-7.158a5.041 5.041 0 00-2.132-6.552c-3.071-1.693-3.522-5.932-.87-8.226a5.036 5.036 0 00.722-6.85c-2.116-2.793-.787-6.844 2.566-7.863a5.051 5.051 0 003.455-5.968c-.793-3.412 2.075-6.57 5.551-6.142 2.636.324 5.09-1.444 5.597-4.052.67-3.442 4.57-5.165 7.578-3.362a5.08 5.08 0 006.766-1.43z"
                fill="#fff"
            />
            <path
                d="M5.51 41.753a5.31 5.31 0 01.19-.173 5.037 5.037 0 001.634-4.856 5.047 5.047 0 011.654-.857 5.051 5.051 0 003.455-5.968c-.793-3.412 2.075-6.57 5.551-6.142 2.636.324 5.09-1.445 5.597-4.052.67-3.442 4.57-5.165 7.578-3.362a5.08 5.08 0 006.766-1.43c2.019-2.877 6.28-2.877 8.3 0A5.08 5.08 0 0053 16.343c3.008-1.803 6.908-.08 7.578 3.362.507 2.608 2.96 4.376 5.596 4.052 3.477-.428 6.345 2.73 5.552 6.142a5.051 5.051 0 003.455 5.968c.625.19 1.179.485 1.654.857a5.037 5.037 0 001.633 4.856c.065.056.128.114.19.173a4.994 4.994 0 01-.91 1.977 5.038 5.038 0 00-.048 6.02 5.47 5.47 0 01-.1.056 5.041 5.041 0 00-2.134 6.552c1.487 3.171-.66 6.857-4.15 7.158-2.644.23-4.675 2.469-4.627 5.123.064 3.504-3.396 5.997-6.71 4.858-2.513-.864-5.28.356-6.32 2.802-1.375 3.23-5.545 4.111-8.116 1.72a5.083 5.083 0 00-6.919 0c-2.57 2.391-6.74 1.51-8.114-1.72-1.04-2.446-3.808-3.666-6.321-2.802-3.314 1.14-6.774-1.354-6.71-4.858.048-2.654-1.983-4.894-4.628-5.123-3.49-.301-5.637-3.987-4.15-7.158a5.041 5.041 0 00-2.132-6.552 5.346 5.346 0 01-.101-.057 5.038 5.038 0 00-.048-6.019 4.994 4.994 0 01-.91-1.977z"
                fill="#D3D3D3"
            />
            <path
                d="M38.904 4.873c-.126.361-.195.75-.195 1.154v31a3.5 3.5 0 107 0v-31c0-.295-.036-.58-.105-.854-1.839-1.784-4.742-1.884-6.7-.3z"
                fill="#1E1E1E"
                style={{
                    mixBlendMode: "hard-light",
                }}
            />
        </g>
    );
}