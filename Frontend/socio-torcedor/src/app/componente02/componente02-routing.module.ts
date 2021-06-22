import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Componente02Component } from "./componente02.component";

const routes: Routes = [
    {
      path: '',
      component: Componente02Component,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class Componente02RoutingModule { }
  