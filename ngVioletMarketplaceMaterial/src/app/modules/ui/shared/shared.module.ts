import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MaterialModule } from '../../material/material.module';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DoubleGradButtonComponent } from './components/buttons/double-grad-button/double-grad-button.component';
import { GhostGradButtonComponent } from './components/buttons/ghost-grad-button/ghost-grad-button.component';
import { NavGradButtonComponent } from './components/buttons/nav-grad-button/nav-grad-button.component';
import { FormContainerComponent } from './components/forms/form-container/form-container.component';
import { FormFieldComponent } from './components/forms/form-field/form-field.component';
import { TabContainerComponent } from './components/tabs/tab-container/tab-container.component';
import { HeaderComponent } from './components/text/header/header.component';
import { ParagraphComponent } from './components/text/paragraph/paragraph.component';
import { WarningMessageComponent } from './components/text/warning-message/warning-message.component';
import { ScrollDirective } from './directives/scroll.directive';
import { SharedRoutingModule } from './shared-routing.module';
import { SocialMediaContainerComponent } from './social-media-container/social-media-container.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    DoubleGradButtonComponent,
    NavGradButtonComponent,
    FormFieldComponent,
    FormContainerComponent,
    ParagraphComponent,
    HeaderComponent,
    WarningMessageComponent,
    TabContainerComponent,
    GhostGradButtonComponent,
    ScrollDirective,
    SocialMediaContainerComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FontAwesomeModule,
    FormsModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedRoutingModule,
  ],
  exports: [
    AboutUsComponent,
    DoubleGradButtonComponent,
    NavGradButtonComponent,
    FormFieldComponent,
    FormContainerComponent,
    TabContainerComponent,
    GhostGradButtonComponent,
    WarningMessageComponent,
    MaterialModule,
    FormsModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    FontAwesomeModule,
    CommonModule,
    LayoutModule,
    SocialMediaContainerComponent,
  ],
})
export class SharedModule { }
