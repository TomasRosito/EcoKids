import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/pagina-inicio-sesion/pagina-inicio-sesion.module').then( m => m.PaginaInicioSesionPageModule)
  },
  {
    path: '',
    redirectTo: 'pagina-inicio-sesion', 
    pathMatch: 'full'
  },
  {
    path: 'pagina-registro',
    loadChildren: () => import('./pages/pagina-registro/pagina-registro.module').then( m => m.PaginaRegistroPageModule)
  },
  {
    path: 'pagina-carrito',
    loadChildren: () => import('./pages/pagina-carrito/pagina-carrito.module').then( m => m.PaginaCarritoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
