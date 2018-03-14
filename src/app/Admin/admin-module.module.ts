import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './routing-module/admin-routing.module';
import { AdminGuard } from '../services/admin.guard';
import { UserService } from '../services/user.service';


//import module


import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule

  ],
  providers: [ AdminGuard, UserService ]

})
export class AdminModule { }

