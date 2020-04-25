import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss']
})
export class AddAlumnoComponent implements OnInit {
  nombreAlumno:string = "Gabriel Schlam"

  alumnos = [{nombre:"Juan", matricula:"1234"}, {nombre:"Gabriel", matricula:"3456"}, {nombre:"Pepe", matricula:"4355"}]

  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    this.nombreAlumno = this.nombreAlumno + "hola"
  }

}
