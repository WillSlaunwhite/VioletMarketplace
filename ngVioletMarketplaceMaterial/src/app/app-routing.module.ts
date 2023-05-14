import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/shared/components/about-us/about-us.component';
import { SharedRoutingModule } from './modules/shared/shared-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';

const routes: Routes = [
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
