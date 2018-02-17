import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { ListComponent } from '../list/list.component';
import { MainComponent } from '../main/main.component';


const  adminRoutes: Routes = [
  {
    path:'admin-panel',
    component: MainComponent,
    children:[
        {path:'list', component: ListComponent},
        {path:'edit', component: EditComponent},
        {path:'add', component: AddComponent},
        {path:'', redirectTo:'list', pathMatch: 'full'}
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: []
})

export class AdminRoutingModule { }
