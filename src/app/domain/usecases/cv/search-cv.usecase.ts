import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { CvModel } from '../../models/cv.model';
import { CvRepository } from '../../repositories/cv.repository';

export class SearchCv implements UseCase<string, CvModel[]> {

    constructor(private cvRepository: CvRepository) { }

    execute(query:string): Observable<CvModel[]> {
        return this.cvRepository.search(query);
    }
}
