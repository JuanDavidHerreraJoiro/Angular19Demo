import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/directives/material.module';
import { Router, RouterModule } from '@angular/router';
import { NotificationListOrganismComponent } from "../../atomic-design/notification/notification-list-organism/notification-list-organism.component";

export interface Notification {
  title: string;
  subtitle: string;
  avatar: string;
  isActive: boolean;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, MaterialModule, RouterModule, NotificationListOrganismComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  user = {
    name: 'Mathew Anderson',
    role: 'Designer',
    email: 'info@modernize.com',
  };

  menuProfiles = [
    { icon: 'manage_accounts', title: 'My Profile', subtitle: 'Account Settings', path: 'Home' },
    { icon: 'inbox', title: 'My Inbox', subtitle: 'Messages & Email', path: 'Home' },
    { icon: 'task', title: 'My Tasks', subtitle: 'To-do and Daily Tasks', path: 'Home' }
  ];

  notificationsList: Notification[] = [
    { title: 'Roman Joined the Team!', subtitle: 'Congratulate him', avatar: '../../../../../../../assets/images/avatar/Avatar men4.jpeg', isActive: true },
    { title: 'New message received', subtitle: 'Salma sent you new message', avatar: '../../../../../../../assets/images/avatar/Avatar men4.jpeg', isActive: true },
    { title: 'New Payment received', subtitle: 'Check your earnings', avatar: '../../../../../../../assets/images/avatar/Avatar men4.jpeg', isActive: true },
  ];

  messagesList: Notification[] = [
    { title: 'Roman Joined the Team!', subtitle: 'Congratulate him', avatar: '../../../../../../../assets/images/avatar/Avatar men1.jpeg', isActive: false },
    { title: 'New message received', subtitle: 'Salma sent you new message', avatar: '../../../../../../../assets/images/avatar/Avatar men3.jpeg', isActive: false },
    { title: 'New Payment received', subtitle: 'Check your earnings', avatar: '../../../../../../../assets/images/avatar/Avatar men5.jpeg', isActive: false },
    { title: 'Jolly completed tasks', subtitle: 'Assign her new tasks', avatar: '../../../../../../../assets/images/avatar/Avatar women1.jpeg', isActive: false },
    { title: 'Roman Joined the Team!', subtitle: 'Congratulate him', avatar: '../../../../../../../assets/images/avatar/Avatar women3.jpeg', isActive: false },
    { title: 'A New Message for You!', subtitle: 'Congratulate him', avatar: '../../../../../../../assets/images/avatar/Avatar women5.jpeg', isActive: false }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  openSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    const confirmLogout = window.confirm('¿Estás seguro de que deseas cerrar sesión?');
    if (confirmLogout) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  randomColor: string = this.getRandomColor();

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
