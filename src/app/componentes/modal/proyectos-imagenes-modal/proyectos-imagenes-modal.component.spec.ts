import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosImagenesModalComponent } from './proyectos-imagenes-modal.component';

describe('ProyectosImagenesModalComponent', () => {
  let component: ProyectosImagenesModalComponent;
  let fixture: ComponentFixture<ProyectosImagenesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosImagenesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosImagenesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
