import { ResolveFn } from '@angular/router';
import { CvModel } from '../domain/models/cv.model';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

export const detailsReducerResolver: ResolveFn<Observable<CvModel>> = (route, state) => {
  const cvService = inject(CvService);

  const cvId = route.params['id'];
  console.log("details resolver"+cvId);
  
  return cvService.apicv$(cvId);
};
