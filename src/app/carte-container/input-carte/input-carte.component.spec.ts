import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCarteComponent } from './input-carte.component';

describe('InputCarteComponent', () => {
  let component: InputCarteComponent;
  let fixture: ComponentFixture<InputCarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCarteComponent]
    });
    fixture = TestBed.createComponent(InputCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
