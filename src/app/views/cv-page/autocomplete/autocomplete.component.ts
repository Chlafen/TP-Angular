import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  cvService = inject(CvService);
  router = inject(Router);
  results$!: Observable<CvModel[]>
  query: FormControl = new FormControl();


  ngOnInit(): void {
    this.results$ = this.query.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((squery) => console.log(squery)),
      switchMap((squery) => this.cvService.apisearch$(squery)),
      tap((cvs) => console.log(cvs))
      );

    this.results$.pipe(
      tap((cvs) => console.log("OOOO"+cvs))
    )
  }

  select(cv: CvModel) {
    this.query.setValue('');
    this.router.navigate(['cv', 'list', cv.id]);
  }
}
