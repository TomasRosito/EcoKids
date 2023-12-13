import { Component} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EcoinsService } from 'src/app/services/ecoins.service';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.page.html',
  styleUrls: ['./pagina-carrito.page.scss'],
})

export class PaginaCarritoPage  {
  
  constructor(public cartService: CartService, public ecoinsService: EcoinsService) {
    this.ecoinsService.dinero$.subscribe((nuevoDinero) => {
      this.totalECoins = nuevoDinero;
    });
  }

  puedeComprarTotalCarrito(): boolean {
    return this.puedeComprar(this.cartService.totalCarrito);
  }

  totalECoins: number = 0;

  puedeComprar(totalCompra: number): boolean {
    return this.totalECoins >= totalCompra;
  }

  eliminarProducto(nombre: string): void {
    this.cartService.eliminarProducto(nombre);
  }

  vaciarCarrito(): void {
    this.cartService.vaciarCarrito();
  }

  aumentarCantidad(item: any): void {
    this.cartService.aumentarCantidad(item.producto.nombre);
  }

  disminuirCantidad(item: any): void {
    this.cartService.disminuirCantidad(item.producto.nombre);
  }
  

  crearMensaje():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
`;
      parteProductos = parteProductos + mensajeProducto;
    })
    const primeraParte = "https://wa.me/+543417241211?text=";
    const segundaParte = `Hola, quiero hacer un pedido:
${parteProductos}

Mis datos:
- Nombre: NOMBRE
- Dirección: DIRECCIÓN

Notas:
`;
    const mensaje = encodeURI(primeraParte+segundaParte);
     return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.vaciarCarrito();
  }
}
