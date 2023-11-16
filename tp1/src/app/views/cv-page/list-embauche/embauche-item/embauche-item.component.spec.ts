import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheItemComponent } from './embauche-item.component';

describe('EmbaucheItemComponent', () => {
  let component: EmbaucheItemComponent;
  let fixture: ComponentFixture<EmbaucheItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbaucheItemComponent]
    });
    fixture = TestBed.createComponent(EmbaucheItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
