import { Component, Input } from '@angular/core';
import { CvModel } from 'src/app/domain/models/cv.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent {
 @Input() listCvs!: CvModel[]

}
