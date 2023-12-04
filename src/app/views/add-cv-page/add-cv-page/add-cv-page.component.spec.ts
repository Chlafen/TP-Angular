import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCvPageComponent } from './add-cv-page.component';

describe('AddCvPageComponent', () => {
  let component: AddCvPageComponent;
  let fixture: ComponentFixture<AddCvPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCvPageComponent]
    });
    fixture = TestBed.createComponent(AddCvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
