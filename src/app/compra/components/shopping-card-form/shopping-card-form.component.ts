import { Component, OnInit } from '@angular/core';
import { CompraQuery } from '../../state/compra/compra.query';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CompraService } from '../../state/compra/compra.service';

@Component({
  selector: 'app-shopping-card-form',
  templateUrl: './shopping-card-form.component.html',
  styleUrls: ['./shopping-card-form.component.scss'],
})
export class ShoppingCardFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public compraQuery: CompraQuery,
    private compraService: CompraService
  ) {}
  compraForm = this.fb.group({
    id: new FormControl(),
    fecha: new FormControl(new Date(), [Validators.required]),
    productos: new FormControl([], [Validators.required]),
  });

  ngOnInit(): void {
    this.compraQuery.activeEntity$.pipe(first()).subscribe((active) => {
      const { id, fecha, productos } = active;
      this.compraForm.setValue({ id, fecha: new Date(fecha), productos });
    });
  }

  save() {
    console.log(this.compraForm.value);
    // this.compraService.add(this.compraForm.value);
  }
}
