import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { ListasComponent } from './containers/listas/listas.component';
import { ListaCompraComponent } from './containers/lista-compra/lista-compra.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCardListComponent } from './components/shopping-card-list/shopping-card-list.component';
import { ShoppingCardFormComponent } from './components/shopping-card-form/shopping-card-form.component';
import { CompraService } from './state/compra/compra.service';
import { ProductosService } from './state/productos/productos.service';
import { Subscription } from 'rxjs';

@NgModule({
  declarations: [
    ListasComponent,
    ListaCompraComponent,
    ShoppingCardListComponent,
    ShoppingCardFormComponent,
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
})
export class CompraModule implements OnDestroy {
  private subcriptions: Subscription = new Subscription();

  constructor(
    private compraService: CompraService,
    private productosService: ProductosService
  ) {
    this.subcriptions.add(compraService.syncCollection().subscribe());
    this.subcriptions.add(productosService.syncCollection().subscribe());
  }
  ngOnDestroy() {
    this.subcriptions.unsubscribe();
  }
}
