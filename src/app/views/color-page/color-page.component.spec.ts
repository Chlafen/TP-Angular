import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPageComponent } from './color-page.component';

describe('ColorPageComponent', () => {
  let component: ColorPageComponent;
  let fixture: ComponentFixture<ColorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPageComponent]
    });
    fixture = TestBed.createComponent(ColorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
