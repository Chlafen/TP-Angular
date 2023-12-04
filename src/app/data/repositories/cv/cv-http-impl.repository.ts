import { Observable, map } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvRepository } from 'src/app/domain/repositories/cv.repository';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CvImplementationRepositoryMapper } from './mappers/cv-repository.mapper';
import { ENDPOINT } from 'src/app/app.config';
import { Injectable } from '@angular/core';
import { CvEntity } from './entities/cv-entity';
import { AddCvModel } from 'src/app/domain/models/add-cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvRepositoryHttpImpl extends CvRepository {
  cvMapper = new CvImplementationRepositoryMapper();
  uri = 'personnes';
  constructor(private http: HttpClient) {
    super();
  }

  private addMapTo(cv: AddCvModel): Object {
    return {
      name: cv.fname!,
      firstname: cv.lname!,
      age: cv.age!,
      cin: cv.cin!,
      job: cv.job!,
      path: cv.path!,
    };
  }

  override create(cv: AddCvModel): Observable<CvModel> {
    let url = ENDPOINT + this.uri;
    if (cv.path === undefined) {
      cv.path = 'https://www.w3schools.com/howto/img_avatar.png';
    }

    return this.http.post<CvModel>(url, this.addMapTo(cv));
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
  override search(query: string): Observable<CvModel[]> {
    query = query.toLowerCase().trim();
    const params = new HttpParams().set(
      'filter',
      JSON.stringify({
        where: {
          name: { like: `%${query}%` },
        },
      })
    );

    let url = ENDPOINT + this.uri;
    return this.http.get<CvEntity[]>(url, { params }).pipe(
      map((cvEntities: CvEntity[]) => {
        return cvEntities.map((cvEntity) => {
          return this.cvMapper.mapFrom(cvEntity);
        });
      })
    );
  }
}
