import { Routes } from "@angular/router";

export const CONTENT_ROUTES: Routes = [

    {
        path: '',
            loadChildren: () => import('./../../views/HomePage/homePage.module').then((m) => m.HomePageModule)
    },
    {
        path: 'socio-torcedor',
            loadChildren: () => import('./../../views/socio-torcedor/socioTorcedor.module').then((m) => m.SocioTorcedorModule)
    },

]