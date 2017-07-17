import { Component, Input,  OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent {
 @Input() childBaseNumber;
  constructor() {}

}
