import { Component, OnInit } from '@angular/core';
import { CompraQuery } from '../../state/compra/compra.query';
import { Compra } from '../../state/compra/compra.model';

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.scss'],
})
export class ShoppingCardListComponent implements OnInit {
  constructor(public compraQuery: CompraQuery) {}

  ngOnInit(): void {}
  edit(listaCompra: Compra) {}
}
