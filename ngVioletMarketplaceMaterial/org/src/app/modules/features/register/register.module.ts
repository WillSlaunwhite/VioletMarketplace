import { NgModule } from '@angular/core';

import { SharedModule } from '../../ui/shared/shared.module';
import { OptionalFormComponent } from './components/optional-form/optional-form.component';
import { RequiredFormComponent } from './components/required-form/required-form.component';
import { SummaryTabComponent } from './components/summary-tab/summary-tab.component';
import { FromCamelCasePipe } from './pipes/from-camel-case.pipe';
import { ToCamelCasePipe } from './pipes/to-camel-case.pipe';
import { RegisterComponent } from './views/register/register.component';


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
    SharedModule
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
