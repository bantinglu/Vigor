import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../Home/home.component';
import { SideboardGuideComponent } from "./../sideboard-guide/sideboard-guide.component"

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'sideboarding', component: SideboardGuideComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
