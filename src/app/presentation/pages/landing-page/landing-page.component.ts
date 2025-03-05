import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';
import { AtomCardComponent } from "../../../shared/components/atom-card/atom-card.component";
import { ServiceComponent } from '../service/service.component';
import { ProcessComponent } from '../process/process.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ContactComponent } from "../contact/contact.component";

@Component({
  imports: [
    CommonModule,
    MaterialModule,
    AtomCardComponent,
    ServiceComponent,
    ProcessComponent,
    TestimonialComponent,
    ContactComponent
],
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  cards = [
    { icon: 'bar_chart', title: 'Analysis', subtitle: 'Category leading brand experiences that have meaning.' },
    { icon: 'data_saver_on', title: 'Strategy', subtitle: 'Category leading brand experiences that have meaning.' },
    { icon: 'search', title: 'Research', subtitle: 'Category leading brand experiences that have meaning.' }
  ];

}
