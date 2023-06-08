import { Injectable } from "@angular/core";
import { Prizm } from "src/app/model/prizm";
import { IPrizmView } from "../view/IPrizmView";

@Injectable()
export class PresenterService {
    prizm!: Prizm
    view!: IPrizmView;
    loadPrizm(a: number, b: number, h: number, view: IPrizmView) {
        this.view = view;
        this.prizm = new Prizm(a, b, h)
        this.view.a = "Катет a=" + this.prizm.a;
        this.view.b = "Катет b=" + this.prizm.b;
        this.view.v = "Обєм =" + this.prizm.v.toFixed(2);
        this.view.s = "Площина S=" + this.prizm.s.toFixed(2);
    }
}