import { Component, OnInit } from '@angular/core';
import { producto } from '../core/interfaces/producto';
import { PRODUCTOS } from '../core/constants/productos';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { EcoinsService } from '../services/ecoins.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  productos: producto[] = PRODUCTOS;

  constructor(private router: Router, private cartService: CartService,private ecoinsService:EcoinsService, private navCtrl: NavController) {}

  irAPaginaCarrito() {
    this.navCtrl.navigateForward('/pagina-carrito');
  }

  agregarAlCarrito(producto: producto): void {
    const cantidad = 1;
    this.cartService.agregarAlCarrito(producto, cantidad);
    this.router.navigate(['/pagina-carrito']);
  }

  totalECoins: number = 0;

  ngOnInit() {
    this.totalECoins = this.ecoinsService.dineroSubject.value

    this.ecoinsService.dinero$.subscribe((nuevoDinero)=>{
      this.totalECoins = nuevoDinero;
    })
    
  }

}



