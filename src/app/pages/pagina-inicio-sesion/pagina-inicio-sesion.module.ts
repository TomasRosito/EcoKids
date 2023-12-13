import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInicioSesionPageRoutingModule } from './pagina-inicio-sesion-routing.module';

import { PaginaInicioSesionPage } from './pagina-inicio-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicioSesionPageRoutingModule
  ],
  declarations: [PaginaInicioSesionPage]
})
export class PaginaInicioSesionPageModule {}
