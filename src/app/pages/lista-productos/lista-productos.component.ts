import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  standalone: false,
  
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {

  productos:Producto[]=[];
  constructor(private _productoService:ProductoService){

  }
  ngOnInit(): void {
    this.productos=this._productoService.getProductos();
}
}
