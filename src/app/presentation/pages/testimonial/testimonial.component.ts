import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';

interface Testimonial {
  image: string;
  feedback: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule, MaterialModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  testimonials: Testimonial[] = [
    {
      image: '../../../../assets/images/users/img-5.jpg',
      feedback: 'It looks perfect  all major browsers, tablets, and mobile devices. All files are organized we believe it will be easy to use and edit them. This template is well organized and very easy to customize.',
      name: 'Jennifer Shapiro',
      role: 'Frontend'
    },
    {
      image: '../../../../assets/images/users/img-6.jpg',
      feedback: 'It looks perfect on all major browsers, tablets, and mobile devices. All files are organized we believe it will be easy to use and edit them. This template is well organized and very easy to customize.',
      name: 'Brandon Carney',
      role: 'Designer'
    },
    {
      image: '../../../../assets/images/users/img-7.jpg',
      feedback: 'All your client websites if you are an agency or freelancer. It got all the tools needs to create super fast responsive websites with amazing user experience. We have added a Dark version with RTL supported.',
      name: 'William Mooneyhan',
      role: 'Developer'
    }
  ];

  teamMembers = [
    {
      name: 'Juliana Waddell',
      role: 'CEO & Founder',
      img: 'assets/images/users/img-2.jpg',
      socialNetworks: [
        { icon: 'mdi mdi-facebook', url: '#' },
        { icon: 'mdi mdi-instagram', url: '#' },
        { icon: 'mdi mdi-whatsapp', url: '#' }
      ]
    },
    {
      name: 'Tyler Raymer',
      role: 'Project Manager',
      img: 'assets/images/users/img-1.jpg',
      socialNetworks: [
        { icon: 'mdi mdi-facebook', url: '#' },
        { icon: 'mdi mdi-instagram', url: '#' },
        { icon: 'mdi mdi-whatsapp', url: '#' }
      ]
    },
    {
      name: 'Chris Lewis',
      role: 'UI/UX Designer',
      img: 'assets/images/users/img-3.jpg',
      socialNetworks: [
        { icon: 'mdi mdi-facebook', url: '#' },
        { icon: 'mdi mdi-instagram', url: '#' },
        { icon: 'mdi mdi-whatsapp', url: '#' }
      ]
    },
    {
      name: 'Juliana Waddell',
      role: 'Web Developer',
      img: 'assets/images/users/img-4.jpg',
      socialNetworks: [
        { icon: 'mdi mdi-facebook', url: '#' },
        { icon: 'mdi mdi-instagram', url: '#' },
        { icon: 'mdi mdi-whatsapp', url: '#' }
      ]
    }
  ];

}
