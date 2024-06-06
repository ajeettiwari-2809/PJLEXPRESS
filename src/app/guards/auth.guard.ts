// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { ToastrService } from 'ngx-toastr';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })


// export class AuthGuard{

//   constructor(private auth: AuthService, private router: Router, private toastr: ToastrService){

//   }

//   canActivate():boolean {
//     if(this.auth.isLoggedIn()){
//       return true;
//     }else{
//       this.toastr.error("Please Login First!");
//       this.router.navigate(['homepage/signin']);
//       return false;
//     }
    
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
//import { LoginService } from '../login/login.service';
 //import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

    //constructor(private authTokenService: LoginService, private router: Router ){}
    constructor(private auth: AuthService,
       private router: Router ){}

  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log("In Active Auth Guard");
      if (this.auth.isLoggedIn() && localStorage.getItem('user')){

        console.log("In insde Active Auth Guard");
        return true;

        }

 console.log("In insde DEAAActive Auth Guard");
      this.router.navigate(['']);
      return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log("In DEActive Auth Guard");
      if (this.auth.isLoggedIn()){
        console.log("In insde DeActive Auth Guard");
        return true;
      }
      this.router.navigate(['']);
      return false;
    }


}