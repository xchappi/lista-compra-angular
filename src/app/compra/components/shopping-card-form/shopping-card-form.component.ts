import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompraQuery } from '../../state/compra/compra.query';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { first, startWith, map, flatMap, takeWhile } from 'rxjs/operators';
import { CompraService } from '../../state/compra/compra.service';
import { Compra } from '../../state/compra/compra.model';
import { of } from 'rxjs/internal/observable/of';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-card-form',
  templateUrl: './shopping-card-form.component.html',
  styleUrls: ['./shopping-card-form.component.scss'],
})
export class ShoppingCardFormComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  constructor(
    private fb: FormBuilder,
    public compraQuery: CompraQuery,
    public compraService: CompraService
  ) {}
  compraForm = this.fb.group({
    id: this.fb.control(''),
    fecha: this.fb.control(new Date(), [Validators.required]),
    productos: this.fb.array([]),
  });
  activeCompra: Compra;
  editMode: boolean;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions;

  get productos() {
    return this.compraForm.get('productos') as FormArray;
  }

  ngOnInit(): void {
    this.preloadForm();
    this.preloadComponentData();
    // this.productos.valueChanges.subscribe((productos) => {
    //   productos.forEach((producto, i) => {
    //     this.productos.controls[i].valueChanges.pipe(
    //       startWith(''),
    //       map((value: string) => this.filter(value))
    //     );
    //   });
    // });
  }

  /**
   * PUBLIC METHODS
   */

  // save the form value into the db
  public save() {
    const { id, fecha, productos } = this.compraForm.value;
    this.compraService
      .add({ id, fecha: new Date(fecha).toString(), productos })
      .then((success) => {
        this.compraService.setActiveEntity(success.toString());
        this.compraService.updateUI({ editMode: false });
      });
  }

  public addProducto() {
    this.productos.push(new FormControl(''));
  }
  public removeProducto(index: number) {
    this.productos.removeAt(index);
  }

  /**
   * PRIVATE METHODS
   */

  // preload form with active entity value
  private preloadForm() {
    // of(this.compraForm.contains('productos'))
    //   .pipe(
    //     takeWhile((contains) => contains === true),
    //     first(),
    //     flatMap((res) => {
    // })
    // )
    this.subscriptions.add(
      this.compraQuery.activeEntity$.subscribe((active) => {
        if (!!active) {
          const { id, fecha, productos } = active;
          productos.forEach((producto) => {
            this.activeCompra = active;
            this.productos.push(new FormControl(producto));
          });
          this.compraForm.patchValue({
            id,
            fecha: new Date(fecha),
          });
        }
      })
    );
  }

  // preload component data
  private preloadComponentData() {
    this.subscriptions.add(
      this.compraQuery.editMode$.subscribe(
        (editMode) => (this.editMode = editMode)
      )
    );
  }

  // private filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(
  //     (option) => option.toLowerCase().indexOf(filterValue) === 0
  //   );
  // }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
