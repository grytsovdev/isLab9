export class Prizm {

    a: number
    b: number
    h: number
    s: number
    v: number

    constructor(a: number, b: number, h: number) {
        this.a = a;
        this.b = b;
        this.h = h;
        this.s = Math.sqrt(a * a + b * b) + a + b;
        this.v = (1 / 2) * a * b * h;
    }
}