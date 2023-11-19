import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvService } from 'src/app/services/cv.service';
@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
})
export class CvPageComponent {
  cvs$: Observable<CvModel[]>;
  constructor(private cvService: CvService) { 
    this.cvs$ = this.cvService.filteredListCvs$
  }


}
