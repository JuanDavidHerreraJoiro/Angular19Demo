import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/directives/material.module';
import { AtomCardComponent } from "../../../shared/components/atom-card/atom-card.component";
import { ServiceComponent } from '../../components/service/service.component';
import { ProcessComponent } from '../../components/process/process.component';

@Component({
  imports: [
    CommonModule, 
    MaterialModule, 
    AtomCardComponent,
    ServiceComponent,
    ProcessComponent
  ],
  selector: 'app-landing-page-home',
  templateUrl: './landing-page-home.component.html',
  styleUrl: './landing-page-home.component.css'
})
export class LandingPageHomeComponent {

  cards = [
    { icon: 'bar_chart', title: 'Analysis', subtitle: 'Category leading brand experiences that have meaning.' },
    { icon: 'data_saver_on', title: 'Strategy', subtitle: 'Category leading brand experiences that have meaning.' },
    { icon: 'search', title: 'Research', subtitle: 'Category leading brand experiences that have meaning.' }
  ];

}
