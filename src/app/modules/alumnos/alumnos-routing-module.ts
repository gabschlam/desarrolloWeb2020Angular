import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const rutas: Routes = [
  {path: 'anadirAlumno', component: AddAlumnoComponent},
  {path: 'listadoAlumnos', component : ListaAlumnosComponent}
]

@NgModule ({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})

export class AlumnosRoutingModule{

}
