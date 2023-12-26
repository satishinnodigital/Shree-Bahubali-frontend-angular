import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { KycMainComponent } from './kyc/kyc-main/kyc-main.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'kyc-steps',
    component:KycMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
