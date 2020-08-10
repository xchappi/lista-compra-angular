import { Injectable } from '@angular/core';
import {
  EntityState,
  ActiveState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';
import { Compra } from './compra.model';

export interface CompraState
  extends EntityState<Compra, string>,
    ActiveState<string> {
  ui: {
    editMode: boolean;
  };
}

const initialState = {
  ui: { editMode: false },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'compra' })
export class CompraStore extends EntityStore<CompraState> {
  constructor() {
    super(initialState);
  }
}
