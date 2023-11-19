import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { CvModel } from '../../models/cv.model';
import { CvRepository } from '../../repositories/cv.repository';

export class DeleteCv implements UseCase<number, CvModel> {

    constructor(private cvRepository: CvRepository) { }

    execute(id:number): Observable<CvModel> {
        return this.cvRepository.delete(id);
    }
}