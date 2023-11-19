import { Component, Input } from '@angular/core';
import { catchError, map } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvService } from 'src/app/services/cv.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css'],
  providers: [MessageService],
})
export class CvDetailsComponent {
  @Input('cv') cv?: CvModel;

  constructor(
    private cvService: CvService,
    private messageService: MessageService,
    private router: Router
  ) {}

  onEmbaucher() {
    if (this.cv) {
      this.cvService.embauche(this.cv.id).pipe(
        map((success) => {
          if (success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'CV embauché avec succès',
              key: 'br',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'CV déjà embauché',
              key: 'br'
            });
          }
        }),
        catchError((error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
            key: 'br',
          });
          return error;
        })
      ).subscribe();
    }
  }

  onDetails() {
    if (this.cv && this.cv.id) {
      this.router.navigate(['cv', this.cv.id]);
    }
  }
}
