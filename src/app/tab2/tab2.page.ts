import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IPrizmView } from './view/IPrizmView';
import { PresenterService } from './presenter/presenter.service';
import { prizmView } from './view/prizmView';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, HttpClientModule]
})
export class Tab2Page {
  view!: IPrizmView;


  constructor(private pr: PresenterService) {
    this.view = new prizmView();
  }

  ras(a: any, b: any, h: any) {
    this.pr.loadPrizm(a, b, h, this.view)
  }

}
