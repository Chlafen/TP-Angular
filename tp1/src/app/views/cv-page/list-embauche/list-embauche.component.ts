import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-list-embauche',
  templateUrl: './list-embauche.component.html',
  styleUrls: ['./list-embauche.component.css']
})
export class ListEmbaucheComponent {
    cvs$: Observable<CvModel[]> = of([]);
    constructor(private cvService: CvService) {
      this.cvs$ = this.cvService.cvEmbauche$();
    }
}
