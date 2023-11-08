
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //URL ONTIENE LISTA DE EMPLEADOS DE LA BASE DE DATOS
private baseURL="Http://localhost:8080/api/v1/empleados";
  constructor(private httpClient : HttpClient) { }

  //metodo nos sive para obtener los empleados
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);

    }
  ///registra
    registrarEmpleado(empleado:Empleado) : Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`,empleado);
    }

    ///actualizar
    actualizarEmpleado(id:number,empleado:Empleado) : Observable<object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
    }

    //buscar por ID
    obtenerEmpleadoPorId(id:number) : Observable<Empleado>{
      return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
    }

    //eliminar
    eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  }

