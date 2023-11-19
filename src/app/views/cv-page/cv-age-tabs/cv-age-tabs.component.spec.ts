import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAgeTabsComponent } from './cv-age-tabs.component';

describe('CvAgeTabsComponent', () => {
  let component: CvAgeTabsComponent;
  let fixture: ComponentFixture<CvAgeTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvAgeTabsComponent]
    });
    fixture = TestBed.createComponent(CvAgeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
