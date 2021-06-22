import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Componente01Component } from './componente01/componente01.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CONTENT_ROUTES } from './shared/routes/content-routes.routes';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
