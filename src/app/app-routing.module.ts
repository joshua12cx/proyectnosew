import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/ActualizarEmpleadoComponent';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

const routes: Routes=[
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleado',component : RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'empleado-detalles/:id',component : EmpleadoDetallesComponent}
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
