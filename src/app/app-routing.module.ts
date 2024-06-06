import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { SigninComponent } from './homepage/signin/signin.component';
import { SignupComponent } from './homepage/signup/signup.component';

import { AuthGuard } from './guards/auth.guard';
import { NavfooterComponent } from './pjlexpress/navfooter/navfooter.component';
import { DashboardUIComponent } from './pjlexpress/dashboard-ui/dashboard-ui.component';
import { SalesModuleComponent } from './pjlexpress/sales-module/sales-module.component';
import { PlayvedioComponent } from './pjlexpress/playvedio/playvedio.component';



const routes: Routes = [
 

  { path: '', component: SigninComponent },
  { path: 'homepage/signin', component: SigninComponent },
  { path: 'homepage/signup', component: SignupComponent },
  { path: 'navfooter', component: NavfooterComponent },
  
  
  //For Active Authguard
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      
      { path: 'dashboardScreens', component: DashboardUIComponent },
      { path: 'salesmoduleScreens', component: SalesModuleComponent },
      { path: 'playvedios', component: PlayvedioComponent },
    ]
  } 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
