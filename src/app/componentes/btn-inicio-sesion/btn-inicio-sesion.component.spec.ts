import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInicioSesionComponent } from './btn-inicio-sesion.component';

describe('BtnInicioSesionComponent', () => {
  let component: BtnInicioSesionComponent;
  let fixture: ComponentFixture<BtnInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
