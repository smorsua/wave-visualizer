export function cartesianToPolar(
    x: number,
    y: number
): { r: number; theta: number } {
    return { r: Math.sqrt(x ** 2 + y ** 2), theta: Math.atan2(y, x) };
}

export function radiansToDeg(theta: number) {
    return theta * (180 / Math.PI);
}
