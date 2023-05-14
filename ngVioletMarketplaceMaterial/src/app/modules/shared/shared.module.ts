import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenModule } from "../tokens/token.module";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent
  ],
  exports: [
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SidenavComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TokenModule,
    UserModule,
  ]
})
export class SharedModule { }
