import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Componente01Component } from "./componente01.component";

const routes: Routes = [
    {
      path: '',
      component: Componente01Component,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class Componente01RoutingModule { }
  