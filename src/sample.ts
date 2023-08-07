export function calculate(a: number, b: number, c: boolean): number {
    if(c) {
        return 0;
    }

    if(a > b) {
        return a - b;
    } else {
        return b - a
    }
}