import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css'],
})
export class CvDetailsComponent {
  @Input('cv') cv?: CvModel;

  constructor(private cvService: CvService) {}

  onEmbaucher() {
    if (this.cv) {
      this.cvService.embauche(this.cv.id).pipe(
        map((success) => {
          if (success) {
            alert('cv embauché');
          } else {
            alert('cv déjà embauché');
          }
        })
      ).subscribe();
    }
  }

  onDetails() {
    let token = localStorage.getItem('token') || '';
    let expiresAt = localStorage.getItem('expiresAt') || '';
    if (
      token == '' ||
      expiresAt == '' ||
      new Date(expiresAt).getTime() < new Date().getTime()
    ) {
      window.location.href = '/login';
    }
  }
}
