import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes=[
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path: '', redirectTo:'empleados',pathMatch:'full'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
