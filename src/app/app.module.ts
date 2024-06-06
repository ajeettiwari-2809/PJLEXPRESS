import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { SigninComponent } from './homepage/signin/signin.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { NavheaderComponent } from './pjlexpress/navheader/navheader.component';
import { NavfooterComponent } from './pjlexpress/navfooter/navfooter.component';
import { DashboardUIComponent } from './pjlexpress/dashboard-ui/dashboard-ui.component';
import { SideNavComponent } from './pjlexpress/side-nav/side-nav.component';
import { HeaderBarComponent } from './pjlexpress/header-bar/header-bar.component';
import { PlayvedioComponent } from './pjlexpress/playvedio/playvedio.component';
import { SalesModuleComponent } from './pjlexpress/sales-module/sales-module.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterByPipe } from './filter-by.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  
    SigninComponent,
    SignupComponent,
  
    NavheaderComponent,
       NavfooterComponent,
       DashboardUIComponent,
       SideNavComponent,
       HeaderBarComponent,
       PlayvedioComponent,
       SalesModuleComponent,
       FilterByPipe,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
   
    RouterModule,
    HttpClientModule,
    NgToastModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,                 
    }),
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatMenuModule,
    FilterPipeModule,
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
