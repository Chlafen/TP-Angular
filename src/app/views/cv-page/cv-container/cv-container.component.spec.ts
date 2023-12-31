import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvContainerComponent } from './cv-container.component';

describe('CvContainerComponent', () => {
  let component: CvContainerComponent;
  let fixture: ComponentFixture<CvContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvContainerComponent]
    });
    fixture = TestBed.createComponent(CvContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
