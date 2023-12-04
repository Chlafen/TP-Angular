import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { CvModel } from '../../domain/models/cv.model';
import { Observable, catchError, map } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cv-details-page',
  templateUrl: './cv-details-page.component.html',
  styleUrls: ['./cv-details-page.component.css'],
  providers: [MessageService],
})
export class CvDetailsPageComponent {
  cv$: Observable<CvModel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.cv$ = this.activatedRoute.data.pipe(map((data) => data['cv']));
    console.log('details sub');
  }

  deleteCv(cvId: number) {
    this.cvService
      .remove(cvId)
      .pipe(
        map((res) => {
          if (res == null) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'CV deleted successfully',
              key: 'br',
            });
            this.router.navigate(['cv']);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: res,
              key: 'br',
            });
          }
        })
      )
      .subscribe();
  }
}
