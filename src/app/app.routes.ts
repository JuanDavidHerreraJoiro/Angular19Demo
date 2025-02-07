import { Routes } from '@angular/router';
import { LandingPageHomeComponent } from './presentation/pages/landing-page-home/landing-page-home.component';

export const routes: Routes = [
  { path: '', component: LandingPageHomeComponent },
  { path: '**', redirectTo: '' }
];
