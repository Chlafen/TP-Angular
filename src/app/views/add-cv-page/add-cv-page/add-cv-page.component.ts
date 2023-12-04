import { MessageService } from 'primeng/api';
import { CvService } from 'src/app/services/cv.service';
import { Component, inject } from '@angular/core';
import { AddCvModel } from 'src/app/domain/models/add-cv.model';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv-page',
  templateUrl: './add-cv-page.component.html',
  styleUrls: ['./add-cv-page.component.css'],
  providers: [MessageService],
})
export class AddCvPageComponent {
  cv: AddCvModel = {};
  canDeactivate() {
    if (
      this.cv.lname ||
      this.cv.fname ||
      this.cv.age ||
      this.cv.cin ||
      this.cv.job ||
      this.cv.about
    ) {
      console.log('cant deactivate');

      return window.confirm(
        'Are you sure you want to leave this page? you have unsaved changes'
      );
    }
    return true;
  }
  constructor(
    private messageService: MessageService,
    private cvService: CvService,
    private router: Router
  ) {}

  addCv(): void {
    this.cvService
      .add(this.cv)
      .pipe(
        tap((err) => {
          if (!err) {
            this.messageService.add({
              severity: 'success',
              summary: 'Added Successfully',
              detail: 'Your CV has been added successfully',
              key: 'br',
            });
            this.router.navigate(['/cv']);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error while adding CV',
              detail: 'Error: ' + err,
              key: 'br',
            });
          }
        })
      )
      .subscribe();
  }
}
