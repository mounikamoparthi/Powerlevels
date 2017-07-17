import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BaseNumber} from './base-number';
@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  num: BaseNumber = new BaseNumber(0);
  power(formData: NgForm) {
    console.log(formData.value.cnumber);
    this.num.baseNumber = formData.value.cnumber;
    this.num.updatePower();
  }
  constructor() { }

  ngOnInit() {
  }

}
