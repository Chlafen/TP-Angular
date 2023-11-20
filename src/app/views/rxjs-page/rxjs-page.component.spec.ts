import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPageComponent } from './rxjs-page.component';

describe('RxjsPageComponent', () => {
  let component: RxjsPageComponent;
  let fixture: ComponentFixture<RxjsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsPageComponent]
    });
    fixture = TestBed.createComponent(RxjsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
