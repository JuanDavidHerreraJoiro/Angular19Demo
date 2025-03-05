import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../shared/directives/material.module';
import { RouterModule } from '@angular/router';
import { NotificationItemAtomComponent } from '../notification-item-atom/notification-item-atom.component';

@Component({
  selector: 'app-notification-list-organism',
  imports: [CommonModule, MaterialModule, RouterModule, NotificationItemAtomComponent],
  templateUrl: './notification-list-organism.component.html',
  styleUrl: './notification-list-organism.component.css'
})
export class NotificationListOrganismComponent {
  @Input() titleText!: string;
  @Input() titleButton!: string;
  @Input() notifications: { 
    title: string;
    subtitle: string;
    avatar: string;
    isActive: boolean;
  }[] = [];
}
