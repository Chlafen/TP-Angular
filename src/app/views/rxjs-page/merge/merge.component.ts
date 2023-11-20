import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  map,
  merge,
  reduce,
  scan,
} from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnDestroy {
  inputOne = new FormControl();
  inputTwo = new FormControl();

  subjectOne$ = new BehaviorSubject(0);
  subjectTwo$ = new BehaviorSubject(0);

  mergedValue$ = new Observable<number>();
  scanValue$ = new Observable<number>();
  reduceValue$ = new Observable<number>();

  firstTerminated: boolean = false;
  secondTerminated: boolean = false;

  loading:string = "";
  interval:any;

  endFirstStream() {
    this.subjectOne$.complete();
    this.firstTerminated = true;
  }
  endSecondStream() {
    this.subjectTwo$.complete();
    this.secondTerminated = true;
  }

  constructor() {
    this.interval = setInterval(() => {
      this.loading += ".";
      if(this.loading.length > 3) this.loading = "";
    } , 250);

    this.mergedValue$ = merge(this.subjectOne$, this.subjectTwo$).pipe(
      map((value) => value)
    );

    this.scanValue$ = this.mergedValue$.pipe(
      scan((acc, value) => {
        if (value) return acc + value;
        return acc;
      })
    );

    this.reduceValue$ = this.mergedValue$.pipe(
      reduce((acc, value) => {
        if (value) return acc + value;
        return acc;
      })
    );
  }

  changeStreamOneValue() {
    if (this.inputOne.value) this.subjectOne$.next(this.inputOne.value);
  }
  changeStreamTwoValue() {
    if (this.inputTwo.value) this.subjectTwo$.next(this.inputTwo.value);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
