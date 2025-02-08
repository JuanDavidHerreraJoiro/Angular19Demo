import { Routes } from '@angular/router';
import { LandingPageHomeComponent } from './presentation/pages/landing-page-home/landing-page-home.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { SignInComponent } from './presentation/pages/sign-in/sign-in.component';
import { GraphicComponent } from './presentation/pages/graphic/graphic.component';

export const routes: Routes = [
  { path: '', component: LandingPageHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: '**', redirectTo: '' }
];
