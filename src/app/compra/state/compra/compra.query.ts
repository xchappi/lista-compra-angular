import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CompraStore, CompraState } from './compra.store';

@Injectable({ providedIn: 'root' })
export class CompraQuery extends QueryEntity<CompraState> {
  action$ = this.select('action');
  listas$ = this.selectAll();
  activeEntity$ = this.selectActive();
  editMode$ = this.select((state) => !!state.ui.editMode);
  constructor(protected store: CompraStore) {
    super(store);
  }
}
