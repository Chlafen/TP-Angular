import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CvModel } from "../domain/models/cv.model";
import { Store } from "./store/store";
import { GetAllCvs } from "../domain/usecases/cv/get-all-cvs.usecase";
import { GetCvById } from "../domain/usecases/cv/get-cv-by-id.usecase";
import { DeleteCv } from "../domain/usecases/cv/delete-cv.usecase";
import { Observable, catchError, map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CvService {
  store = new Store<CvModel[]>([]);

  constructor(
    private getAllCvs: GetAllCvs,
    private getCvById: GetCvById,
    private delteCv: DeleteCv,
    private authService: AuthService,
  ) {
    this.initialize([]);
  }

  cvs$ = this.store.select(cvs => cvs);

  cv$ = (cvId: number) =>
    this.store.select(cvs => cvs.find(cv => cv.id == cvId) as CvModel);

  cvEmbauche$ = () => {
    if(!this.authService.isAuthed()){
      return this.store.select(_ => []);
    }
    return this.store.select(cvs => cvs.filter(cv => cv.embauche === true));
  }

  initialize(initialItems: CvModel[]): void {
    // try to get items from getAllCvs usecase and update store with them if success else update store with initialItems
    this.getAllCvs.execute().pipe(
      map(cvs => this.store.update(_ => cvs)),
      catchError(async (_) => this.store.update(_ => initialItems))
    ).subscribe();
  }

  remove(id: number): Observable<boolean> {
    return this.delteCv.execute(id).pipe(
      map(_ => this.store.update(cvs => cvs.filter(cv => cv.id !== id))),
      map(_ => true),
      catchError(async (_) => false)
    );
  }

  embauche(id: number): Observable<boolean> {
    if(!this.authService.isAuthed()){
      console.log("You are not authenticated");

      return new Observable(observer => {
        observer.error("You are not authenticated");
      });
    }
    return this.cv$(id).pipe(
      map(cv => {
        if(cv.embauche == true){
          return false;
        }
        cv.embauche = true;
        this.store.update(cvs => cvs.map(_cv => _cv.id === cv.id ? cv : _cv));
        return true;
      }),
    );
  }

  clearCv(): void {
    this.store.update(_ => []);
  }

  // add(cv: CvModel): void {
  //   this.store.update(cvs => [...cvs, cv]);
  // }
}
