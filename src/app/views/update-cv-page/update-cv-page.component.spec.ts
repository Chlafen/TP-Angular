import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCvPageComponent } from './update-cv-page.component';

describe('UpdateCvPageComponent', () => {
  let component: UpdateCvPageComponent;
  let fixture: ComponentFixture<UpdateCvPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCvPageComponent]
    });
    fixture = TestBed.createComponent(UpdateCvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
