import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../directives/material.module';

@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})

export class NavMenuComponent {
  homepath: string = '/';
  isScrolled: boolean = false;
  activeFragment: string = 'home';

  menuItems = [
    { path: 'home', label: 'Home' },
    { path: 'service', label: 'Service' },
    { path: 'process', label: 'Process' },
    { path: 'testimonial', label: 'Testimonial' },
    //{ path: 'portfolio', label: 'Portfolio' },
    //{ path: 'pricing', label: 'Pricing' },
    //{ path: 'blog', label: 'Blog' },
    { path: 'contact', label: 'Contact' },
    { path: 'login', label: 'Login' },
    { path: 'sign-in', label: 'Sign in' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; 

    const sections = this.menuItems.map(item => document.getElementById(item.path));
    const scrollPosition = window.scrollY;
    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
          this.activeFragment = this.menuItems[index].path;
        }

        if (scrollPosition+50 >= sectionTop ) {
          this.activeFragment = this.menuItems[index].path;
        }
      }
    });
  }

  constructor(private router: Router) {}

  setActiveFragment(fragment: string) {
    this.activeFragment = fragment;

    this.redirectToLogin(fragment);
  }

  redirectToLogin(ruta: string) {
    if(ruta === 'login' || ruta === 'sign-in') {
      this.router.navigate(['/'+ruta]);
    }
  }
  
}
