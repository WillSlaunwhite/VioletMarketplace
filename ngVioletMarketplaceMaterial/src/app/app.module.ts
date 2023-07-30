import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenModule } from './modules/tokens/token.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './modules/material/material.module';
import { UserEffects } from './modules/register/state/register.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    HomeModule, // import HomeModule here
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json',
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([UserEffects]),
    FontAwesomeModule,
    UserModule,
    AuthModule,
    TokenModule,
    MaterialModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
