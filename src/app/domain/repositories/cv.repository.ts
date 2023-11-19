import { Observable } from 'rxjs';
import { CvModel } from '../models/cv.model';
export abstract class CvRepository {
    abstract create(cv: CvModel): Observable<CvModel>;
    abstract update(cv: CvModel): Observable<CvModel>;
    abstract delete(id: number): Observable<CvModel>;
    abstract findAll(): Observable<CvModel[]>;
    abstract findOne(id: number): Observable<CvModel>;
}
