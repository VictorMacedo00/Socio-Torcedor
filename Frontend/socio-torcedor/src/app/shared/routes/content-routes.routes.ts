import { Routes } from "@angular/router";

export const CONTENT_ROUTES: Routes = [

    {
        path: 'primeiro-componente',
            loadChildren: () => import('./../../componente01/componente01.module').then((m) => m.Componente01Module)
    },
    {
        path: 'segundo-componente',
            loadChildren: () => import('./../../componente02/componente02.module').then((m) => m.Componente02Module)
    }


]