import { Observable, map } from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvRepository } from 'src/app/domain/repositories/cv.repository';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    let token = localStorage.getItem('token');

    return this.http.delete<CvModel>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
