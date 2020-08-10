import { Component, OnInit } from '@angular/core';
import { CompraQuery } from '../../state/compra/compra.query';
import { Compra } from '../../state/compra/compra.model';
import { CompraService } from '../../state/compra/compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.scss'],
})
export class ShoppingCardListComponent implements OnInit {
  constructor(
    public compraQuery: CompraQuery,
    public compraService: CompraService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  edit(listaCompra: Compra) {
    this.compraService.setActiveEntity(listaCompra.id);
    this.compraService.updateUI({ editMode: true });
    this.router.navigate(['compra/lista-compra']);
  }
}
