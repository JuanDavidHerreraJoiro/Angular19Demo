import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule, MaterialModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

}
