import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    NavMenuComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-colegio';

  menuItems = [
    { path: 'home', label: 'Home' },
    { path: 'service', label: 'Service' },
    { path: '/process', label: 'Process' },
    { path: '/testimonial', label: 'Testimonial' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/login', label: 'Login' },
    { path: '/Sign-in', label: 'Sign in' }
  ];
}
