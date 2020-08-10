import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { CompraStore, CompraState } from './compra.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'listas' })
export class CompraService extends CollectionService<CompraState> {
  constructor(store: CompraStore) {
    super(store);
  }
}
