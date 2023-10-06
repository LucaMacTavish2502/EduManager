import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionMesasComponent } from './inscripcion-mesas.component';

describe('InscripcionMesasComponent', () => {
  let component: InscripcionMesasComponent;
  let fixture: ComponentFixture<InscripcionMesasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscripcionMesasComponent]
    });
    fixture = TestBed.createComponent(InscripcionMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
