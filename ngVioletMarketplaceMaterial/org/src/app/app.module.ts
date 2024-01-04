import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './modules/other/core/core.module';
import { HomeModule } from './modules/other/home/home.module';
import { NavigationModule } from './modules/ui/navigation/navigation.module';
import { SharedModule } from './modules/ui/shared/shared.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    HomeModule,
    NavigationModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
