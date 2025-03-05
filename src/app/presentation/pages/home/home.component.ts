import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from '../../../shared/directives/material.module';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    HeaderComponent,
    SideNavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  sidenavMode: 'over' | 'side' = 'side';
  hasBackdrop: boolean = false;
  isSidenavOpen: boolean = false;
  isMiniMode: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe('(max-width: 1024px)').subscribe((state: BreakpointState) => {
      this.sidenavMode = state.matches ? 'over' : 'side';
      this.hasBackdrop = state.matches;
      this.isSidenavOpen = !state.matches;
      this.isMiniMode = false;
    });
  }

  toggleSidenav(sidenav: any) {
    if (sidenav.opened) {
      if (window.innerWidth > 1024) {
        this.isMiniMode = !this.isMiniMode; // Alterna entre 270px y 80px
      } else {
        sidenav.close();
      }
    } else {
      sidenav.open();
      this.isMiniMode = false; // Expandir si se abre
    }
  }

}

