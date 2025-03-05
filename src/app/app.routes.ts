import { Routes } from '@angular/router';
import { LandingPageComponent } from './presentation/pages/landing-page/landing-page.component';
import { GraphicComponent } from './presentation/pages/graphic/graphic.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { AnalyticalComponent } from './presentation/pages/home/pages/analytical/analytical.component';
import { ContactsComponent } from './presentation/pages/home/pages/contacts/contacts.component';
import { EmployeeComponent } from './presentation/pages/home/pages/employee/employee.component';
import { ErrorComponent } from './shared/pages/error/error.component';
import { MaintenanceComponent } from './shared/pages/maintenance/maintenance.component';
import { LoginComponent } from './presentation/pages/authentication/login/login.component';
import { SignInComponent } from './presentation/pages/authentication/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { 
    path: 'authentication', 
    component: LoginComponent,
    children  : [
      { path: 'login', component: LoginComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: '', pathMatch:'full', redirectTo: 'login' },
    ]
  },
  { path: 'graphic', component: GraphicComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children  : [
      { path: 'analytical', component: AnalyticalComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: '', pathMatch:'full', redirectTo: 'analytical' },
    ]
  },
  { path: '**', redirectTo: '' }
];
