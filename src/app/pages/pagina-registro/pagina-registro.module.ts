import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaRegistroPageRoutingModule } from './pagina-registro-routing.module';

import { PaginaRegistroPage } from './pagina-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaRegistroPageRoutingModule
  ],
  declarations: [PaginaRegistroPage]
})
export class PaginaRegistroPageModule {}
