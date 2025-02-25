import { Routes } from '@angular/router';
import { LandingPageHomeComponent } from './presentation/pages/landing-page-home/landing-page-home.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { SignInComponent } from './presentation/pages/sign-in/sign-in.component';
import { GraphicComponent } from './presentation/pages/graphic/graphic.component';
import { HomeComponent } from './presentation/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: LandingPageHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
