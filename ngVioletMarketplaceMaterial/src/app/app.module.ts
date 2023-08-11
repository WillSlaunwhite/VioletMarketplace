import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { NavigationModule } from './modules/ui/navigation/navigation.module';
import { SharedModule } from './modules/ui/shared/shared.module';

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
