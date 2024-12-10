import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,
  
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  nombre: string='pablo elias parraga illanes';
  porcentaje:number=0.225;
 
  

}
