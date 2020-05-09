import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss']
})
export class AddAlumnoComponent implements OnInit {
  nombreAlumno:string = "Gabriel Schlam"

  alumnos: Alumno[];

  constructor(public alumnosService:AlumnoService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(){
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;

    })
  }

  sumar(){
    this.nombreAlumno = this.nombreAlumno + "hola"
  }

}
