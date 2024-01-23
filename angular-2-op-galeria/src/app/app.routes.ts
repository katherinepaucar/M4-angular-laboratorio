import { Routes } from '@angular/router';
import { AboutComponent, HomeComponent, LoginComponent } from './public';
import {
  CrudComponent,
  DashboardComponent,
  GalleryComponent,
  ProfileComponent,
} from './private';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];
