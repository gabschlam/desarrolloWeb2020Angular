import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  getAlumnos():Observable<Alumno[]>{
    let alumnos:Alumno[]=[new Alumno(12, "Juan", "ITC"),
                          new Alumno(14, "Jose", "ITC"),
                          new Alumno(15, "Susana", "ITC")];

    return of(alumnos);
  }

  constructor() { }
}
