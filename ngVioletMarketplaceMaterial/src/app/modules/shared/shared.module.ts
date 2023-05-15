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
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    FontAwesomeModule,
    TokenModule,
    SharedRoutingModule,
    FormsModule,
    UserModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent,
  ],
})
export class SharedModule { }
