import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductosStore, ProductosState } from './productos.store';

@Injectable({ providedIn: 'root' })
export class ProductosQuery extends QueryEntity<ProductosState> {

  constructor(protected store: ProductosStore) {
    super(store);
  }

}
