import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  menuOpen: boolean = false;
  
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }

    closeMenu() {
      this.menuOpen = false;
    }

}
