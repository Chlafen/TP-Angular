import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
})
export class CvPageComponent {
  cvs$: Observable<CvModel[]>;

  constructor(private router:ActivatedRoute) { 
    this.cvs$ = this.router.data.pipe(
      map((data) => data['cvs']), 
      tap((cvs)=>console.log(cvs))
    )
  }


}
