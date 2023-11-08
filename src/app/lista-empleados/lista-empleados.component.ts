import { Component, OnInit } from '@angular/core';

import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
 
  empleado:Empleado[];

  constructor(private empleadoServicio:EmpleadoService,private router:Router){}

 ngOnInit(): void {
  this.obtenerEmpleados();
 }
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  //  this.empleado = [{ 
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
  // ];
 

 // en el bakend no olvides que tienes que poner @CrossOrigin(origins = "http://localhost:4200")
 eliminarEmpleado(id:number){
  this.empleadoServicio.eliminarEmpleado(id).subscribe(dato =>{
    console.log(dato);
    this.obtenerEmpleados();
  })
 }
 
 private obtenerEmpleados(){
  this.empleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
this.empleado = dato;
  });
 }

 verDetallesDelEmpleado(id:number){
this.router.navigate(['empleado-detalle', id]);
 }
}

