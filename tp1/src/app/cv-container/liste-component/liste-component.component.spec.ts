import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComponentComponent } from './liste-component.component';

describe('ListeComponentComponent', () => {
  let component: ListeComponentComponent;
  let fixture: ComponentFixture<ListeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeComponentComponent]
    });
    fixture = TestBed.createComponent(ListeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
