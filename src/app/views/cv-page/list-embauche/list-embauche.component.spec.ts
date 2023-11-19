import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmbaucheComponent } from './list-embauche.component';

describe('ListEmbaucheComponent', () => {
  let component: ListEmbaucheComponent;
  let fixture: ComponentFixture<ListEmbaucheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmbaucheComponent]
    });
    fixture = TestBed.createComponent(ListEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
