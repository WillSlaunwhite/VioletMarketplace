import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/shared/components/about-us/about-us.component';
import { slideInAnimation } from 'src/app/animations/animations';
import { HomeComponent } from './modules/shared/components/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
  {
    path: 'about',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
