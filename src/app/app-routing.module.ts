import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent} from './adminpage/adminpage.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MoviesComponent} from './movies/movies.component';
 
const routes: Routes = [
  
  {
    component: MoviesComponent,
    path: 'movies'
  },
  {
    component: DashboardComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
