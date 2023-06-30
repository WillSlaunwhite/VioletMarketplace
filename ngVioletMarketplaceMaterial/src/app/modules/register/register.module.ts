import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { OptionalFieldsContainerComponent } from './components/optional-fields-container/optional-fields-container.component';
import { OptionalFormComponent } from './components/optional-form/optional-form.component';
import { RegisterComponent } from './components/register/register.component';
import { RequiredFormComponent } from './components/required-form/required-form.component';
import { SummaryTabComponent } from './components/summary-tab/summary-tab.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ToCamelCasePipe } from './pipes/to-camel-case.pipe';
import { FromCamelCasePipe } from './pipes/from-camel-case.pipe';


@NgModule({
  declarations: [
    OptionalFieldsContainerComponent,
    OptionalFormComponent,
    RegisterComponent,
    RequiredFormComponent,
    SummaryTabComponent,
    ToCamelCasePipe,
    FromCamelCasePipe
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
