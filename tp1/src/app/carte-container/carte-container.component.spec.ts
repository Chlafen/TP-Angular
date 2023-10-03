import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteContainerComponent } from './carte-container.component';

describe('CarteContainerComponent', () => {
  let component: CarteContainerComponent;
  let fixture: ComponentFixture<CarteContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteContainerComponent]
    });
    fixture = TestBed.createComponent(CarteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
