import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-inicio-sesion',
  templateUrl: './pagina-inicio-sesion.page.html',
  styleUrls: ['./pagina-inicio-sesion.page.scss'],
})
export class PaginaInicioSesionPage{

  constructor(private navCtrl: NavController) {}

  redirigirPaginaRegistro(){
    this.navCtrl.navigateForward('/pagina-registro');
  }
}
