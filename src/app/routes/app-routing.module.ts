import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { TiendaComponent } from '../components/tienda/tienda.component';
import { HomeComponent } from '../components/home/home.component';
import { AnimalsComponent } from '../components/animals/animals.component';
import { KeeperComponent } from '../components/keeper/keeper.component';
import { ContactComponent } from '../components/contact/contact.component';

const  appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component:TiendaComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'home', component: HomeComponent},
  {path:'animal', component:AnimalsComponent},
  {path:'contact', component:ContactComponent},
  {path:'keeper', component:KeeperComponent},
];

export const  appRoutingProviders: any[] =[];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
