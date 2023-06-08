import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrizmService } from '../../controller/PrizmService';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prizm-view',
  templateUrl: './prizm-view.component.html',
  styleUrls: ['./prizm-view.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export class PrizmViewComponent implements OnInit {

  prizmForm!: FormGroup;

  volume: number = 0;
  area: number = 0;





  constructor(private prizmService: PrizmService, private fb: FormBuilder) {
    this.prizmForm = this.fb.group({
      a: ['3', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      b: ['4', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      h: ['15', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    })


  }

  res() {
    this.area = this.prizmService.area(this.prizmForm.value.a, this.prizmForm.value.b, this.prizmForm.value.h)
    this.volume = this.prizmService.volume(this.prizmForm.value.a, this.prizmForm.value.b, this.prizmForm.value.h)
  }

  ngOnInit() { }

}
