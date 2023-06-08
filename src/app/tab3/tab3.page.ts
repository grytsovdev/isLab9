import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Prizm } from '../model/prizm';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab3Page {




  constructor() { }
  ras(a: any, b: any, h: any) {
    let prizm = new Prizm(a, b, h)
    console.log(prizm.v)
    return `Об'єм: ${prizm.v} Площа: ${prizm.s}`
  }
}
