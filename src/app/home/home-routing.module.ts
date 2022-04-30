import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GithubComponent } from './pages/github/github.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
 {
   path: 'home', component: LandingComponent
 },
 {
   path: 'about', component: AboutComponent
 },
 {
   path: 'github', component: GithubComponent
 },
 {
  path: '**', component: LandingComponent
},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
