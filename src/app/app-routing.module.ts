import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
 */

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
