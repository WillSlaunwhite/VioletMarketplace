import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenModule } from "../tokens/token.module";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule } from '@angular/forms';
import { DoubleGradButtonComponent } from './components/double-grad-button/double-grad-button.component';
import { NavGradButtonComponent } from './components/nav-grad-button/nav-grad-button.component';
import { UserRoutingModule } from '../user/user-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent,
    DoubleGradButtonComponent,
    NavGradButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    FontAwesomeModule,
    TokenModule,
    SharedRoutingModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent,
    DoubleGradButtonComponent,
    NavGradButtonComponent
  ],
})
export class SharedModule { }
