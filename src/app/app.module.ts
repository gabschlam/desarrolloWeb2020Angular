import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloPrincipalComponent } from './main-components/titulo-principal/titulo-principal.component';
import { TercerComponenteComponent } from './main-components//tercer-componente/tercer-componente.component';
import { AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { ProfesoresModule } from './modules/profesores/profesores.module';
import { SalonesModule } from './modules/salones/salones.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

import {registerLocaleData} from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';
import localeBr from '@angular/common/locales/pt';
import localeUS from '@angular/common/locales/en';

import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { PerfilComponent } from './main-components/perfil/perfil.component';

registerLocaleData(localeMX, 'es-MX')
registerLocaleData(localeBr, 'pt')
registerLocaleData(localeUS, 'en')

@NgModule({
  declarations: [
    AppComponent,
    TituloPrincipalComponent,
    TercerComponenteComponent,
    PageNotFoundComponent,
    NavBarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule,
    ProfesoresModule,
    SalonesModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
