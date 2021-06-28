import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RegisterComponent } from './basic-ui/register/register.component';
import { LoginComponent } from './basic-ui/login/login.component';
import { HomeComponent } from './basic-ui/home/home.component';
import { ProfileComponent } from './basic-ui/profile/profile.component';
//import { BoardUserComponent } from './basic-ui/board-user/board-user.component';
//import { BoardModeratorComponent } from './basic-ui/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './basic-ui/board-admin/board-admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  {path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  //{ path: 'user', component: BoardUserComponent },
  //{ path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
