import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesComponent } from '../componentes/clientes/clientes.component';
import { ApiClientesComponent } from './apiClientes.component';
import { RouterModule } from '@angular/router';



const myComponents = [ClientesComponent, ApiClientesComponent]

@NgModule({
  declarations: [
  ...myComponents
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
  ...myComponents
  ]
})
export class ApiClientesModule { }