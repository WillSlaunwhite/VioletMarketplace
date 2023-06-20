import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoubleGradButtonComponent } from './components/buttons/double-grad-button/double-grad-button.component';
import { NavGradButtonComponent } from './components/buttons/nav-grad-button/nav-grad-button.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormFieldComponent } from './components/forms/form-field/form-field.component';
import { ParagraphComponent } from './components/text/paragraph/paragraph.component';
import { HeaderComponent } from './components/text/header/header.component';
import { WarningMessageComponent } from './components/text/warning-message/warning-message.component';
import { FormContainerComponent } from './components/forms/form-container/form-container.component';
import { TabContainerComponent } from './components/tabs/tab-container/tab-container.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutUsComponent,
    DoubleGradButtonComponent,
    NavGradButtonComponent,
    SidenavComponent,
    FormFieldComponent,
    FormContainerComponent,
    ParagraphComponent,
    HeaderComponent,
    WarningMessageComponent,
    TabContainerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    FontAwesomeModule,
    SharedRoutingModule,
    FormsModule,
    UserRoutingModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent,
    DoubleGradButtonComponent,
    NavGradButtonComponent,
    FormFieldComponent,
    FormContainerComponent,
    TabContainerComponent
  ],
})
export class SharedModule { }
