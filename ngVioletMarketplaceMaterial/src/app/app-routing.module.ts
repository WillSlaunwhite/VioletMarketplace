import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TokenComponent } from './components/token/token.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { slideInAnimation } from 'src/app/animations/animations';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animations: [slideInAnimation] },
  },
  {
    path: 'token',
    component: TokenComponent,
  },
  {
    path: 'token/id/:id',
    component: TokenComponent,
  },
  {
    path: 'sidebar',
    component: SidenavComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animations: [slideInAnimation] },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animations: [slideInAnimation] },
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'user/:username',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
