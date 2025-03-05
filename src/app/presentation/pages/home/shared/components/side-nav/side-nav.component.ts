import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/directives/material.module';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  imports: [
    CommonModule, 
    MaterialModule, 
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})

export class SideNavComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  @Input() isMini: boolean = false;
  isMobile: boolean = false;
  
  listmenuButtons = [
    {  
      name: 'Home',
      listbuttons: [
        { title: 'Analytical', path: 'analytical', icon: 'waterfall_chart' },
        { title: 'Dashboard', path: 'dashboard', icon: 'dashboard' },
        { title: 'Perfil', path: 'perfil', icon: 'person' }
      ]
    },
    {  
      name: 'Apps',
      listbuttons: [
        { title: 'Chat', path: 'chat', icon: 'chat' },
        { title: 'Calendar', path: 'calendar', icon: 'event' },
        { title: 'Email', path: 'email', icon: 'email' },
        { title: 'employee', path: 'employee', icon: 'person' },
        { title: 'contacts', path: 'contacts', icon: 'contact_page' }
      ]
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe('(max-width: 1024px)').subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;
    });
  }

  closeSidenav() {
    this.sidenav.close(); // Método para cerrar el sidenav
  }
}
