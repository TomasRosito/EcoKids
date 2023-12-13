import { Component } from '@angular/core';
import { EcoinsService } from '../services/ecoins.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private ecoinsService: EcoinsService) {}

  aumentarNivelFacil() {
    this.ecoinsService.aumentarNivelFacil(10); 
  }
  aumentarNivelMedio() {
    this.ecoinsService.aumentarNivelFacil(100); 
  }
  aumentarNivelDificil() {
    this.ecoinsService.aumentarNivelFacil(500); 
  }


}
