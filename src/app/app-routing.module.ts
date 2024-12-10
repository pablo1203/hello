import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { acercadecomponent } from './pages/acercade/acercade.component';
import { pipe } from 'rxjs';
import { PipeComponent } from './pages/pipe/pipe.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path:'inicio',component:InicioComponent},
  {path:'acercade',component:acercadecomponent},
  {path:'pipe',component:PipeComponent},
  {path:'productos',component:ListaProductosComponent},
  { path: '**', redirectTo: 'inicio' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
