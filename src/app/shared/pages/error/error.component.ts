import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../directives/material.module';

@Component({
  selector: 'app-error',
  imports: [CommonModule, MaterialModule,],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
