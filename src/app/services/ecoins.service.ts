import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EcoinsService {
  dineroSubject = new BehaviorSubject<number>(0);
  dinero$ = this.dineroSubject.asObservable();

  aumentarNivelFacil(cantidad: number) {
    const nuevoDinero = this.dineroSubject.value + cantidad;
    this.dineroSubject.next(nuevoDinero);
    localStorage.setItem('dinero', nuevoDinero.toString());
  }
  aumentarNivelMedio(cantidad: number) {
    const nuevoDinero = this.dineroSubject.value + cantidad;
    this.dineroSubject.next(nuevoDinero);
    localStorage.setItem('dinero', nuevoDinero.toString());
  }
  aumentarNivelDificil(cantidad: number) {
    const nuevoDinero = this.dineroSubject.value + cantidad;
    this.dineroSubject.next(nuevoDinero);
    localStorage.setItem('dinero', nuevoDinero.toString());
  }

  constructor() { 
    const storedDinero = localStorage.getItem('dinero');
    const initialDinero = storedDinero ? parseInt(storedDinero, 10) : 0;
    this.dineroSubject.next(initialDinero);
  }
}
