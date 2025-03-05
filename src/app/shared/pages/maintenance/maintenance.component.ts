import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../directives/material.module';

@Component({
  selector: 'app-maintenance',
  imports: [CommonModule, MaterialModule,],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

}
