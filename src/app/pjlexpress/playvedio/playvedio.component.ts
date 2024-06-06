import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-playvedio',
  templateUrl: './playvedio.component.html',
  styleUrls: ['./playvedio.component.css']
})
export class PlayvedioComponent {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  // Method to navigate to a specific route
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Additional method to perform some action
  performAction() {
    console.log('Action performed!');
  }
}
