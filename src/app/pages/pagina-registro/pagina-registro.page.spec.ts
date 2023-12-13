import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaRegistroPage } from './pagina-registro.page';

describe('PaginaRegistroPage', () => {
  let component: PaginaRegistroPage;
  let fixture: ComponentFixture<PaginaRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
