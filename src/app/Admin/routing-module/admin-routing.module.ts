import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../services/admin.guard';

import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { ListComponent } from '../list/list.component';
import { MainComponent } from '../main/main.component';


const  adminRoutes: Routes = [
  {
    path:'',
    component: MainComponent,
    canActivate: [AdminGuard],
    children:[
        {path:'', redirectTo:'list', pathMatch: 'full'},
        {path:'list', component:ListComponent},
        {path:'edit/:id', component: EditComponent},
        {path:'add', component: AddComponent},

    ]
  },
  {path:'', component: MainComponent},
  {path:'**', component: MainComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: []
})

export class AdminRoutingModule { }
