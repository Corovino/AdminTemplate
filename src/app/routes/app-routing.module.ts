import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TiendaComponent } from '../components/tienda/tienda.component';
import { HomeComponent } from '../components/home/home.component';
import { AnimalsComponent } from '../components/animals/animals.component';
import { KeeperComponent } from '../components/keeper/keeper.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

const  appRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'tienda', component:TiendaComponent},
  {path:'home', component: HomeComponent},
  {path:'animal', component:AnimalsComponent},
  {path:'contact', component:ContactComponent},
  {path:'keeper', component:KeeperComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  { path: 'admin', loadChildren: 'app/Admin/admin-module.module#AdminModule' },
  {path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: []
})

export class AppRoutingModule { }
