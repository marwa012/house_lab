import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseListComponent } from './house/house-list/house-list.component';


const routes: Routes = [
  {path:'',component:HouseListComponent},
  {path:'**',redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
