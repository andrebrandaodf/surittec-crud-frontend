import { ClientesCrudComponent } from './views/clientes-crud/clientes-crud.component';
import { ClientesDeleteComponent } from './components/clientes/clientes-delete/clientes-delete.component';
import { ClientesUpdateComponent } from './components/clientes/clientes-update/clientes-update.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClientesCreateComponent } from './components/clientes/clientes-create/clientes-create.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent},
  {
    path:"clientes",
    component: ClientesCrudComponent
  },
  {
    path:"clientes/create",
    component: ClientesCreateComponent
  }, 
  {
    path:"clientes/update/:id",
    component: ClientesUpdateComponent
  },
  {
    path:"clientes/delete/:id",
    component: ClientesDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
