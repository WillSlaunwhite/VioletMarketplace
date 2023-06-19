import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { AltRegisterComponent } from './components/register/alt-register/alt-register.component';
import { EmailUsernameContainerComponent } from './components/register/email-username-container/email-username-container.component';
import { OptionalFieldsContainerComponent } from './components/register/optional-fields-container/optional-fields-container.component';
import { OptionalFormComponent } from './components/register/optional-form/optional-form.component';
import { PasswordContainerComponent } from './components/register/password-container/password-container.component';
import { RegisterComponent } from './components/register/register/register.component';
import { RegisterTabContainerComponent } from './components/register/register-tab-container/register-tab-container.component';
import { RequiredFormComponent } from './components/register/required-form/required-form.component';
import { SummaryTabComponent } from './components/register/summary-tab/summary-tab.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AltRegisterComponent,
    EmailUsernameContainerComponent,
    OptionalFieldsContainerComponent,
    OptionalFormComponent,
    PasswordContainerComponent,
    RegisterComponent,
    RegisterTabContainerComponent,
    RequiredFormComponent,
    SummaryTabComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class RegisterModule { }
