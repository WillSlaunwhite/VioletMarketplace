import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { TokenComponent } from './components/token/token.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { PictureuploadComponent } from './components/pictureupload/pictureupload.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'token', component: TokenComponent },
  { path: 'token/:id', component: TokenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:username', component: UserPageComponent },
  { path: 'test', component: PictureuploadComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [FormsModule, CommonModule, BrowserModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
