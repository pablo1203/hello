import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }
  private productos:Producto[]=[
    {nombre:"Audifonos",img:"/img/img1.jpeg",precio:100},
    {nombre:"Tenis",img:"/img/img2.jpg",precio:400},
    {nombre:"Reloj",img:"/img/img3.jpg",precio:200},
  ];
  getProductos():Producto[]{
    return this.productos;
  }
}
