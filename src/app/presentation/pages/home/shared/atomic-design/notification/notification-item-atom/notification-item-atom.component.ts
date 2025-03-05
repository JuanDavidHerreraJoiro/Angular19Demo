import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/directives/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notification-item-atom',
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './notification-item-atom.component.html',
  styleUrl: './notification-item-atom.component.css'
})
export class NotificationItemAtomComponent {

  @Input() title!: string;
  @Input() isActive: boolean = false;
  @Input() subtitle!: string;
  @Input() avatar!: string;

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
