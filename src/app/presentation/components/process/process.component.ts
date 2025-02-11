import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';

@Component({
  selector: 'app-process',
  imports: [CommonModule, MaterialModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {

  processes = [
    { number: '01', title: 'Concept', subtitle: 'It is a long established fact that a reader at its layout.', processborder: true},
    { number: '02', title: 'Plan', subtitle: 'It is a long established fact that a reader at its layout.', processborder: true},
    { number: '03', title: 'Design', subtitle: 'It is a long established fact that a reader at its layout.', processborder: true},
    { number: '04', title: 'Development', subtitle: 'It is a long established fact that a reader at its layout.', processborder: false}
  ];

  achivements = [
    { number: '485', title: 'Happy Clients', icon: 'favorite'},
    { number: '536', title: 'Projects Completed', icon: 'layers'},
    { number: '1652', title: 'Files Downloaded', icon: 'cloud_download'},
    { number: '14652', title: 'Liens Of Code', icon: 'developer_mode'},
  ];
}
