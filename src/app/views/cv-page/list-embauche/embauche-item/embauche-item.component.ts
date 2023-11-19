import { Component, Input } from '@angular/core';
import { CvModel } from 'src/app/domain/models/cv.model';

@Component({
  selector: 'app-embauche-item',
  templateUrl: './embauche-item.component.html',
  styleUrls: ['./embauche-item.component.css']
})
export class EmbaucheItemComponent {
  @Input() cv!: CvModel;
}
