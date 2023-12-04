import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, map, tap } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css'],
  providers: [MessageService],
})
export class MasterDetailsComponent {
  cvs$: Observable<CvModel[]>;
  cvService = inject(CvService);
  toaster = inject(MessageService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.cvs$ = this.activatedRoute.data.pipe(
      map((data) => data['cvs']),
      tap((cvs) => console.log(cvs))
    );
  }

  showDetails(cv: CvModel) {
    this.router.navigate(['cv', 'list', cv.id]);
  }
}
