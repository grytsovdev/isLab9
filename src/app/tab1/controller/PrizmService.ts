import { Injectable } from "@angular/core";
import { Prizm } from "../../model/prizm";

@Injectable({
    providedIn: 'root'
})
export class PrizmService {

    area(a: number, b: number, c: number) {
        let prizm = new Prizm(a, b, c);
        return prizm.s
    }
    volume(a: number, b: number, c: number) {
        let prizm = new Prizm(a, b, c);
        return prizm.v
    }
}