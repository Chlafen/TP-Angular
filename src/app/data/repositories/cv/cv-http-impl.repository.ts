import { Observable, map } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvRepository } from 'src/app/domain/repositories/cv.repository';
import { HttpClient } from '@angular/common/http';
import { CvImplementationRepositoryMapper } from './mappers/cv-repository.mapper';
import { ENDPOINT } from 'src/app/app.config';
import { Injectable } from '@angular/core';
import { CvEntity } from './entities/cv-entity';

@Injectable({
  providedIn: 'root',
})
export class CvRepositoryHttpImpl extends CvRepository {
  cvMapper = new CvImplementationRepositoryMapper();
  uri = 'personnes';
  constructor(private http: HttpClient) {
    super();
  }

  override create(cv: CvModel): Observable<CvModel> {
    let url = ENDPOINT + this.uri;
    return this.http.post<CvModel>(url, this.cvMapper.mapTo(cv));
  }
  override update(cv: CvModel): Observable<CvModel> {
    let url = ENDPOINT + this.uri + '/' + cv.id;
    return this.http.patch<CvModel>(url, this.cvMapper.mapTo(cv));
  }
  override delete(id: number): Observable<CvModel> {
    let url = ENDPOINT + this.uri + '/' + id;
    return this.http.delete<CvModel>(url);
  }
  override findAll(): Observable<CvModel[]> {
    let url = ENDPOINT + this.uri;
    return this.http.get<CvEntity[]>(url).pipe(
      map((cvEntities: CvEntity[]) => {
        return cvEntities.map((cvEntity) => {
          return this.cvMapper.mapFrom(cvEntity);
        });
      })
    );
  }
  override findOne(id: number): Observable<CvModel> {
    let url = ENDPOINT + this.uri + '/' + id;
    return this.http.get<CvEntity>(url).pipe(
      map((cvEntity: CvEntity) => {
        return this.cvMapper.mapFrom(cvEntity);
      })
    );
  }
}
