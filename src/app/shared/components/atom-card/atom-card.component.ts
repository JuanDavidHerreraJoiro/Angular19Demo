import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../directives/material.module';

@Component({
  selector: 'app-atom-card',
  imports: [MaterialModule],
  templateUrl: './atom-card.component.html',
  styleUrl: './atom-card.component.css'
})
export class AtomCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
}
