import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [CommonModule, MaterialModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})

export class ServiceComponent {

  services = [
    { image: 'assets/images/feature/img-01.png', title: 'Web design', subtitle: 'Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.', boxShadow: false },
    { image: 'assets/images/feature/img-02.png', title: 'Development', subtitle: 'Due to its widespread use as filler text for layouts, non-readability is of great importance.', boxShadow: true },
    { image: 'assets/images/feature/img-03.png', title: 'Branding', subtitle: 'There are many variations of passages of available, but the majority alteration in some form.', boxShadow: false },
    { image: 'assets/images/feature/img-04.png', title: 'Easy to customize', subtitle: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.', boxShadow: true },
    { image: 'assets/images/feature/img-05.png', title: 'Unrivaled Quality', subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page.', boxShadow: false },
    { image: 'assets/images/feature/img-06.png', title: 'Online Marketing', subtitle: 'This is required when, for example, the is not yet available. Dummy text is also known as "fill text".', boxShadow: true }
  ];

  skills = [
    { title: 'Web Design', percentage: '80%'},
    { title: 'Development', percentage: '60%'},
    { title: 'Branding', percentage: '40%'},
    { title: 'Code', percentage: '75%'},
  ];

}
