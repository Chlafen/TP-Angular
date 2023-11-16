import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../../services/cv.service';
import {CvModel} from '../../domain/models/cv.model';
import {Observable, catchError, map} from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cv-details-page',
  templateUrl: './cv-details-page.component.html',
  styleUrls: ['./cv-details-page.component.css'],
  providers: [MessageService],
})
export class CvDetailsPageComponent {


  cv$: Observable<CvModel>

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private messageService: MessageService
  ) {
    const cvId = this.activatedRoute.snapshot.params['id'];
    this.cv$ = this.cvService.cv$(cvId);
    this.cv$.subscribe(cv => console.log(cv));
  }

  deleteCv(cvId: number) {
    this.cvService.remove(cvId).pipe(
      map(success => {
        if(success){
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
            detail: 'CV not deleted',
            key: 'br',
          });
        }
      },
      catchError(error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: "Error while deleting CV: " + error,
          key: 'br',
        });
        return error;
      })
    )).subscribe();
  }

}
