import { Component, Input } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent {
  @Input("cv") cv!:Cv

}
