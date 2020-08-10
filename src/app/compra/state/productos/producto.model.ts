export interface Producto {
  id: number | string;
  nombre: string;
}

export function createProducto(params: Partial<Producto>) {
  return { nombre: params?.nombre } as Producto;
}
