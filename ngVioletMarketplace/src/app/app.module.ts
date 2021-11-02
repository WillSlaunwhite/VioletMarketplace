import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/token/token.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PictureuploadComponent } from './pictureupload/pictureupload.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NFTInfoComponent } from './components/nft-info/nft-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    TokenComponent,
    NFTInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CollapseModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    TokenService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
