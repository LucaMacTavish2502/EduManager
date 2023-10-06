import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrerasComponent } from './card-carreras.component';

describe('CardCarrerasComponent', () => {
  let component: CardCarrerasComponent;
  let fixture: ComponentFixture<CardCarrerasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarrerasComponent]
    });
    fixture = TestBed.createComponent(CardCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
