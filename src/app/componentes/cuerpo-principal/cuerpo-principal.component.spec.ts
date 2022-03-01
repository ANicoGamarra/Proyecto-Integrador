import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPrincipalComponent } from './cuerpo-principal.component';

describe('CuerpoPrincipalComponent', () => {
  let component: CuerpoPrincipalComponent;
  let fixture: ComponentFixture<CuerpoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
