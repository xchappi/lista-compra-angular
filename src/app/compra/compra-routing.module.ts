import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasComponent } from './containers/listas/listas.component';
import { ListaCompraComponent } from './containers/lista-compra/lista-compra.component';

const routes: Routes = [
  {
    path: '',
    component: ListasComponent,
  },
  {
    path: 'lista-compra',
    component: ListaCompraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraRoutingModule {}
