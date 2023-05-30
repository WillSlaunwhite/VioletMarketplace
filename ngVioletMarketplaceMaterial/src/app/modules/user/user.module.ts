import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { UserRoutingModule } from './user-routing.module';
import { TokenModule } from '../tokens/token.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfileManagementComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    MaterialModule,
    FontAwesomeModule,
    UserRoutingModule,
    TokenModule,
    SharedModule
  ],
  exports: [
    ProfileManagementComponent,
    UserPageComponent
  ]
})
export class UserModule { }
