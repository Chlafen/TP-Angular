import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { CvModel } from '../../models/cv.model';
import { CvRepository } from '../../repositories/cv.repository';

export class GetAllCvs implements UseCase<void, CvModel[]> {

    constructor(private cvRepository: CvRepository) { }

    execute(): Observable<CvModel[]> {
        return this.cvRepository.findAll();
    }
}
