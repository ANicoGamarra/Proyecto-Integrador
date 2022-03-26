import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPerfilModalComponent } from './foto-perfil-modal.component';

describe('FotoPerfilModalComponent', () => {
  let component: FotoPerfilModalComponent;
  let fixture: ComponentFixture<FotoPerfilModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPerfilModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoPerfilModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
