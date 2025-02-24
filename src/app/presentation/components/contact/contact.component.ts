import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MaterialModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contacts = [
    { icon: 'mdi-map-marker', title: 'Main Office', text1: '2276 Lynn Ogden Lane Beaumont', text2: 'Lodgeville Road TX 77701'},
    { icon: 'mdi-phone', title: 'Phone & Email', text1: 'Phone:+71 612-234-4023', text2: 'Fax:+954-627-9727'},
    { icon: 'mdi-email', title: 'Contact', text1: 'www.exampledesign.com', text2: 'exampledesign.com'},
    { icon: 'mdi-calendar-clock', title: 'Working Hours', text1: 'Monday-friday: 9:00 - 06:00', text2: 'Saturday-Sunday: Holiday'},
    ];
}
