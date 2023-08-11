import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/features/auth/auth.module';
import { UserModule } from './modules/features/user/user.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/ui/shared/shared.module';
import { TokenModule } from './modules/tokens/token.module';
import { NavigationModule } from './modules/ui/navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    HomeModule, // import HomeModule here
    UserModule,
    AuthModule,
    TokenModule,
    NavigationModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
