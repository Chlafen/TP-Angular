import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvReducerResolver } from './cv-reducer.resolver';

describe('cvReducerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cvReducerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
