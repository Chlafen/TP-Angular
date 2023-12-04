import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsReducerResolver } from './details-reducer.resolver';

describe('detailsReducerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsReducerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
