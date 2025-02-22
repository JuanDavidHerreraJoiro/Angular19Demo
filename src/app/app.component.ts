import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    NavMenuComponent,
    FooterComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-colegio';

  constructor(private router: Router) {}

  shouldShowNavMenu(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/sign-in' && this.router.url !== '/graphic';
  }
}
