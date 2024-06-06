import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private auth: AuthService,
    private router: Router ){}
  title = 'cyber2';

  sideBarOpen = true;

  sideBarToggler() {
    
    this.sideBarOpen = !this.sideBarOpen;
  }
  isUserAuthenticated()
  {
    return this.auth.isLoggedIn();
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event) {
    this.auth.signOut(); // Clear authentication state
  }
}
