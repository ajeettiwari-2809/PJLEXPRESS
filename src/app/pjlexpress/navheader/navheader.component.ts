import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private auth: AuthService,
    private router: Router ){}
  isUserAuthenticated()
  {
    return this.auth.isLoggedIn();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout()
  {
    
    console.log('ff');
    
      this.auth.signOut();
      this.router.navigate(['']);
   
  }
}
