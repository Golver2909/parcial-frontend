export interface IPrenda{
    id: number,
    nombre: string,
    talle: string,
    color: string,
    precio: number,
    stock: number
}


// defineProps<{
//     mostrarPrendas: IPrenda[]
// }>