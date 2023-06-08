import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmViewComponent } from './view/prizm-view/prizm-view.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule, PrizmViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {
  constructor() { }
}
