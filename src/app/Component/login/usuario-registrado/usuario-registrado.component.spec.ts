import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRegistradoComponent } from './usuario-registrado.component';

describe('UsuarioRegistradoComponent', () => {
  let component: UsuarioRegistradoComponent;
  let fixture: ComponentFixture<UsuarioRegistradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioRegistradoComponent]
    });
    fixture = TestBed.createComponent(UsuarioRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
