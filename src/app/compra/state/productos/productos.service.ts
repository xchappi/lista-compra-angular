import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { ProductosStore, ProductosState } from './productos.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'productos' })
export class ProductosService extends CollectionService<ProductosState> {

  constructor(store: ProductosStore) {
    super(store);
  }

}
