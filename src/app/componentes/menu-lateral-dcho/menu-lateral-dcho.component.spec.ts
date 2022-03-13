import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralDchoComponent } from './menu-lateral-dcho.component';

describe('MenuLateralDchoComponent', () => {
  let component: MenuLateralDchoComponent;
  let fixture: ComponentFixture<MenuLateralDchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLateralDchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateralDchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
