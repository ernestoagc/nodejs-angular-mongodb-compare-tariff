import { Routes, RouterModule } from '@angular/router';
import { TariffComponent } from './pages/tariff/tariff.component';


const appRoutes: Routes = [    
    
    { path: '**', redirectTo:'/',pathMatch:'full'}    ,
    { path: '', component: TariffComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:false, scrollPositionRestoration:'enabled'})
