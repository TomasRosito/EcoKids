import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaCarritoPageRoutingModule } from './pagina-carrito-routing.module';

import { PaginaCarritoPage } from './pagina-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaCarritoPageRoutingModule
  ],
  declarations: [PaginaCarritoPage]
})
export class PaginaCarritoPageModule {}
