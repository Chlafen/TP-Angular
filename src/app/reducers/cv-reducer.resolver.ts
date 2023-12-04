import { ResolveFn } from '@angular/router';
import { CvModel } from '../domain/models/cv.model';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';

export const cvReducerResolver: ResolveFn<CvModel[]|null> = (route, state) => {
  const cvService = inject(CvService);
  return cvService.apicvs$();
};
