import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaInicioSesionPage } from './pagina-inicio-sesion.page';

describe('PaginaInicioSesionPage', () => {
  let component: PaginaInicioSesionPage;
  let fixture: ComponentFixture<PaginaInicioSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaInicioSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
