import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleados';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
 
  empleados:Empleados[];

  constructor(private empleadoServicio:EmpleadoService){}

 ngOnInit(): void {
  this.obterEmpleados();
  //  this.empleados = [{ 
  //   "id": 1,
  //   "nombre": "Cristian",
  //   "apellido":"Ramirez",
  //   "email":"joshua@gmail.com"

  //  },
  //  {
  //   "id": 2,
  //   "nombre": "Gabriel",
  //   "apellido":"Ramirez",
  //   "email":"gabriel20@gmail.com"
  //  }
  //];
 }

 // en el bakend no olvides que tienes que poner @CrossOrigin(origins = "http://localhost:4200")
 private obterEmpleados(){
  this.empleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
this.empleados = dato;
  });
 }
}
