import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionalFormComponent } from './components/optional-form/optional-form.component';
import { RegisterComponent } from './views/register/register.component';
import { RequiredFormComponent } from './components/required-form/required-form.component';
import { SummaryTabComponent } from './components/summary-tab/summary-tab.component';
import { MaterialModule } from '../../ui/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../ui/shared/shared.module';
import { ToCamelCasePipe } from './pipes/to-camel-case.pipe';
import { FromCamelCasePipe } from './pipes/from-camel-case.pipe';


@NgModule({
  declarations: [
    OptionalFormComponent,
    RegisterComponent,
    RequiredFormComponent,
    SummaryTabComponent,
    ToCamelCasePipe,
    FromCamelCasePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
