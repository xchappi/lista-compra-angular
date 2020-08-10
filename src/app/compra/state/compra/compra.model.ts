import { Producto } from '../productos/producto.model';
export interface Compra {
  id: number | string;
  productos: string[];
  fecha: Date;
}

export function createCompra(params: Partial<Compra>) {
  return {
    productos: params?.productos,
    fecha: params?.fecha,
  } as Compra;
}
