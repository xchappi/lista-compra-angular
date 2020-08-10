import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { CompraStore, CompraState } from './compra.store';
import { Compra } from './compra.model';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'listas' })
export class CompraService extends CollectionService<CompraState> {
  constructor(store: CompraStore) {
    super(store);
  }
  updateUI(ui: { editMode: boolean }) {
    this.store.update({ ui });
  }

  setActiveEntity(id: string | number) {
    this.store.setActive(<string>id);
  }
  updateActiveEntity(compra: Partial<Compra>) {
    this.store.updateActive(compra);
  }
}
