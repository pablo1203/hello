import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { PipeComponent } from './pages/pipe/pipe.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    NavbarComponent,
    CapitalizadoPipe,
    PipeComponent,
    ListaProductosComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
