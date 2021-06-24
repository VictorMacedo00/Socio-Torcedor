import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SocioTorcedorFormComponent } from "./form/socioTorcedor-form.component";
import { SocioTorcedorListComponent } from "./list/socioTorcedor-list.component";


const routes: Routes = [
    {
      path: '',
      component: SocioTorcedorListComponent,
    },
    {
      path: 'cadastro',
      component: SocioTorcedorFormComponent,
    },
    {
      path: 'alterar/:id',
      component: SocioTorcedorFormComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SocioTorcedorRoutingModule { }
  