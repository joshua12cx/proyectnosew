
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Empleados } from './empleados';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //URL ONTIENE LISTA DE EMPLEADOS DE LA BASE DE DATOS
private baseURL="Http://localhost:8080/api/v1/empleados";
  constructor(private httpClient : HttpClient) { }

  //metodo nos sive para obtener los empleados
  obtenerListaEmpleados():Observable<Empleados[]>{
    return this.httpClient.get<Empleados[]>(this.baseURL)

    }
  }

