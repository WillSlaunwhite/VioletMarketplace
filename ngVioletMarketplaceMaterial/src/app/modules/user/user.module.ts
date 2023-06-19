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
import { AltRegisterComponent } from './register/alt-register/alt-register.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterTabComponent } from './register/register-tab/register-tab.component';
import { EmailUsernameContainerComponent } from './register/email-username-container/email-username-container.component';
import { PasswordContainerComponent } from './register/password-container/password-container.component';
import { SummaryTabComponent } from './register/summary-tab/summary-tab.component';
import { OptionalFieldsContainerComponent } from './register/optional-fields-container/optional-fields-container.component';

@NgModule({
  declarations: [
    ProfileManagementComponent,
    UserPageComponent,
    AltRegisterComponent,
    LoginComponent,
    RegisterTabComponent,
    EmailUsernameContainerComponent,
    PasswordContainerComponent,
    SummaryTabComponent,
    OptionalFieldsContainerComponent,
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
    SharedModule,
  ],
  exports: [
    ProfileManagementComponent,
    UserPageComponent,
    AltRegisterComponent,
    RegisterTabComponent
  ]
})
export class UserModule { }
