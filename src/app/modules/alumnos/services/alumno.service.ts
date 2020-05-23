import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Alumno } from '../models/alumno';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import { map, catchError, tap} from 'rxjs/operators'
const endpoint = 'http://localhost:8080/api/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' :  'application/json'
    })
  }

  alumnos:Alumno[];

  public getAlumnos():Observable<any>{
   return this.http.get(endpoint)

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  addAlumno(al: Alumno):void{
    this.alumnos.push(al)
  }

  edit(al:Alumno){

  }

}
