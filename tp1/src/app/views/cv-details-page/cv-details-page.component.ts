import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CvService} from '../../services/cv.service';
import {CvModel} from '../../domain/models/cv.model';
import {Observable} from 'rxjs';
import { GetCvById } from 'src/app/domain/usecases/cv/get-cv-by-id.usecase';
@Component({
  selector: 'app-cv-details-page',
  templateUrl: './cv-details-page.component.html',
  styleUrls: ['./cv-details-page.component.css'],
  providers: [CvService]
})
export class CvDetailsPageComponent {

  cv$: Observable<CvModel>

  constructor(private activatedRoute: ActivatedRoute, private getCvById:GetCvById) {
    const cvId = this.activatedRoute.snapshot.params['id']; 
    this.cv$ = this.getCvById.execute(cvId)
  }

}