import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },  
  {
    path: 'log-in',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },     
  {
    path: 'dashboard',
    component: AdminComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
