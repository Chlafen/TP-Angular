import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { CvModel } from '../../models/cv.model';
import { CvRepository } from '../../repositories/cv.repository';
import { AddCvModel } from '../../models/add-cv.model';

export class AddCv implements UseCase<AddCvModel, CvModel> {
  constructor(private cvRepository: CvRepository) {}

  execute(cv: AddCvModel): Observable<CvModel> {
    return this.cvRepository.create(cv);
  }
}
