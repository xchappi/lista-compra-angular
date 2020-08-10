import { Injectable } from '@angular/core';
import {
  EntityState,
  ActiveState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';
import { Producto } from './producto.model';

export interface ProductosState
  extends EntityState<Producto, string>,
    ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'productos' })
export class ProductosStore extends EntityStore<ProductosState> {
  constructor() {
    super();
  }
}
